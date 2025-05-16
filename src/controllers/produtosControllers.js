const produtos = require("../data/produtos");
let carrinho = require("../data/carrinho");

exports.getAll = (req, res) => {
  res.send(produtos);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (produto) {
    res.send(produto);
  } else {
    res.status(404).send({ error: "Produto não encontrado" });
  }
};

exports.getCar = (req, res) => {
  res.send(carrinho);
};

exports.addProduto = (req, res) => {
  const id = req.params.id;
  const produto = produtos.find((item) => item.id == id);

  const filtro = carrinho.find((item) => item.id == id);
  if (filtro) {
    return res.send({ mensage: "produto já adicionado" });
  }

  carrinho.push(produto);
  res.send(produto);
};

exports.deleteProduto = (req, res) => {
  const id = req.params.id;
  carrinho = carrinho.filter((item) => item.id != id);

  res.send(carrinho);
};
