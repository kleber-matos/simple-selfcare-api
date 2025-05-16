const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Serve as imagens da pasta 'public/images' de forma absoluta
app.use("/images", express.static(path.join(__dirname, "public", "images")));

const produtosRoutes = require("../src/routes/produtosRoutes");
app.use("/", produtosRoutes);

app.listen(port, () => {
  console.log(`app running on the port 🚀 ${port}`);
});
