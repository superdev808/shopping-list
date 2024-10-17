import { Box, Button, Dialog, Typography } from "@mui/material";

function DeleteConfirmModal({ isOpen, onClose }) {
  const handleCancel = () => {
    onClose(false);
  };
  const handleDelete = () => {
    onClose(true);
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "26rem",
          height: "15rem",
          p: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#2A323C",
            mb: "10px",
          }}
        >
          Delete Item?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#5C6269",
          }}
        >
          Are you sure you want to delete this item? This can not be undone.
        </Typography>
        <Box sx={{ mt: "auto", ml: "auto" }}>
          <Button sx={{ mr: "1rem", color: "#2A323C" }} onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default DeleteConfirmModal;
