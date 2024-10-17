import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

import { useAppState } from "../../hooks/AppStateProvider";
import ItemModal from "../item-modal";
import DeleteConfirmModal from "../delete-modal";
import ShoppingItem from "../shopping-item";

function ShoppingList() {
  const { loadingItems, shoppingItems, addItem, updateItem, deleteItem } =
    useAppState();
  const [currentItem, setCurrentItem] = useState(null);
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenItemModal = (item) => {
    setCurrentItem(item || null);
    setItemModalOpen(true);
  };

  const handleOpenAddModal = () => {
    handleOpenItemModal();
  };

  const handleCloseItemModal = (item) => {
    setCurrentItem(null);
    setItemModalOpen(false);

    if (!item) return;
    if (item.id) {
      updateItem(item);
    } else {
      addItem(item);
    }
  };

  const handleOpenDeleteModal = (item) => {
    setCurrentItem(item);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = (isDeleting) => {
    if (isDeleting && currentItem?.id) {
      deleteItem(currentItem.id);
    }

    setCurrentItem(null);
    setDeleteModalOpen(false);
  };

  if (loadingItems) {
    return (
      <Box display="flex" justifyContent="center">
        <Box pt="11rem">
          <CircularProgress size={76} thickness={3} />
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex">
      {!shoppingItems?.length ? (
        <Box
          width="38rem"
          height="18.5rem"
          border="1px solid #C6C6C6"
          borderRadius="5px"
          textAlign="center"
          pt="5.5rem"
          mt="11rem"
          mx="auto"
        >
          <Typography
            component="p"
            color="#87898C"
            mb="1rem"
          >{`Your shopping list is empty :(`}</Typography>
          <Button variant="contained" onClick={handleOpenAddModal}>
            Add your first item
          </Button>
        </Box>
      ) : (
        <Container
          sx={{
            mt: "6.25rem",
            mb: "3rem",
            maxWidth: "64rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: "18px",
              }}
            >
              Your Items
            </Typography>
            <Button variant="contained" onClick={handleOpenAddModal}>
              Add Item
            </Button>
          </Box>
          {shoppingItems.map((item) => (
            <ShoppingItem
              item={item}
              updateItem={updateItem}
              handleOpenDeleteModal={handleOpenDeleteModal}
              handleOpenItemModal={handleOpenItemModal}
            />
          ))}
        </Container>
      )}
      {itemModalOpen && (
        <ItemModal
          isOpen={itemModalOpen}
          onClose={handleCloseItemModal}
          item={currentItem}
        />
      )}
      {deleteModalOpen && (
        <DeleteConfirmModal
          isOpen={deleteModalOpen}
          onClose={handleCloseDeleteModal}
        />
      )}
    </Box>
  );
}

export default ShoppingList;
