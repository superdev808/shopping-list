import { AppBar, Box } from "@mui/material";
import ShoppingList from "../../components/shopping-list";

function ShoppingPage() {
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "#4D81B7",
          pl: "2rem",
        }}
        className="header"
      >
        Shopping List
      </AppBar>
      <Box>
        <ShoppingList />
      </Box>
    </Box>
  );
}

export default ShoppingPage;
