const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const produtosRoutes = require("../src/routes/produtosRoutes");
app.use("/", produtosRoutes);

app.listen(port, () => {
  console.log(`app running on the port 🚀 ${port}`);
});
