const express = require("express");
const router = express.Router();
const produtosControllers = require("../controllers/produtosControllers");

router.get("/", produtosControllers.getAll);
router.get("/carrinho", produtosControllers.getCar);
router.post("/carrinho/:id", produtosControllers.addProduto);
router.delete("/carrinho/:id", produtosControllers.deleteProduto);

module.exports = router;
