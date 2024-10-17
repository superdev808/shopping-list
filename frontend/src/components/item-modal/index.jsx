import { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import HideIcon from "../../icons/hide";
import { DescriptionLimit } from "../../utils/constants";

function ItemModal({ isOpen, item, onClose }) {
  const isEditing = !!item?.id;
  const [name, setName] = useState(item?.name || "");
  const [description, setDescription] = useState(item?.description || "");
  const [quantity, setQuantity] = useState(item?.quantity);
  const [purchased, setPurchased] = useState(item?.purchased || false);

  const handleCancel = () => {
    onClose();
  };
  const handleSave = () => {
    onClose({
      ...item,
      name,
      description,
      quantity,
      purchased,
    });
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel}>
      <DialogTitle
        className="header"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fafafa",
          borderBottom: "0.5px solid #d5dfe9",
          color: "#5C6269",
        }}
      >
        SHOPPING LIST
        <IconButton sx={{ ml: "auto", mr: "-8px" }} onClick={handleCancel}>
          <HideIcon />
        </IconButton>
      </DialogTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "35rem",
          height: "44rem",
          p: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#2A323C",
          }}
        >
          {isEditing ? "Edit an Item" : "Add an Item"}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#5C6269",
          }}
        >
          {isEditing ? "Add your new item below" : "Edit your item below"}
        </Typography>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{
            my: "1rem",
            "& .MuiInputBase-input": {
              fontSize: "16px",
              color: "#9CA8B4",
            },
          }}
          placeholder="Item Name"
        />
        <TextField
          value={description}
          multiline
          sx={{
            color: "#9CA8B4",
            height: "8.75rem",
            "& .MuiInputBase-root": {
              height: "100%",
              fontSize: "16px",
              color: "#9CA8B4",
              alignItems: "flex-start",
            },
          }}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          inputProps={{ maxLength: DescriptionLimit }}
          helperText={
            <Typography
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                color: "#5C6269",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {`${description?.length}/${DescriptionLimit}`}
            </Typography>
          }
        />
        <Autocomplete
          sx={{
            my: "1rem",
          }}
          options={["1", "2", "3"]}
          value={quantity}
          onChange={(_, v) => {
            setQuantity(v);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="How many?"
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  color: "#9CA8B4",
                },
              }}
              InputLabelProps={{
                ...params.InputLabelProps,
                sx: {
                  color: "#9CA8B4",
                  opacity: 0.4,
                },
              }}
            />
          )}
        />
        <FormControlLabel
          label="Purchased"
          sx={{ color: "#9CA8B4" }}
          control={
            <Checkbox
              sx={{
                color: "#C6C6C6",
              }}
              checked={purchased}
              onChange={(e) => {
                setPurchased(e.target.checked);
              }}
            />
          }
        />
        <Box sx={{ mt: "auto", ml: "auto" }}>
          <Button sx={{ mr: "1rem", color: "#2A323C" }} onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!name || !description || !quantity}
            onClick={handleSave}
          >
            Save Item
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ItemModal;
