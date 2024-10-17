const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

const corsOptions = {
  // For preventing CORS error on local development, need to be remove
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use("/api/items", itemRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
