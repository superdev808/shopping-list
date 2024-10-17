import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import {
  DeleteOutlined as DeleteOutlinedIcon,
  EditOutlined as EditOutlinedIcon,
} from "@mui/icons-material";

function ShoppingItem({
  item,
  updateItem,
  handleOpenDeleteModal,
  handleOpenItemModal,
}) {
  const isPurchased = !!item?.purchased;
  return (
    <Box
      sx={{
        mt: "0.75rem",
        border: "0.5px solid #D5DFE9",
        borderRadius: "4px",
        height: "5.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pl: "1rem",
        pr: "2rem",
      }}
    >
      <FormControlLabel
        label={
          <Box ml="0.5rem">
            <Typography
              sx={{
                ...(isPurchased
                  ? { textDecoration: "line-through", color: "#4D81B7" }
                  : { color: "#000" }),
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                ...(isPurchased ? { textDecoration: "line-through" } : {}),
                fontSize: "14px",
                fontWeight: "600",
                color: "#7D7A7A",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        }
        control={
          <Checkbox
            sx={{
              color: "#C6C6C6",
            }}
            checked={isPurchased}
            onChange={(e) =>
              updateItem({ ...item, purchased: e.target.checked })
            }
          />
        }
      />
      <Box>
        <IconButton onClick={() => handleOpenItemModal(item)}>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => handleOpenDeleteModal(item)}>
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ShoppingItem;
