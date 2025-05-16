const produtos = require("../data/produtos");
let carrinho = require("../data/carrinho");

exports.getAll = (req, res) => {
  res.send(produtos);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  res.send(produto);
};

exports.getCar = (req, res) => {
  res.send(carrinho);
};

exports.addProduto = (req, res) => {
  const id = req.params.id;
  const produto = produtos.find((item) => item.id == id);

  if (!produto) {
    return res.status(404).send({ mensagem: "Produto não encontrado" });
  }

  const filtro = carrinho.find((item) => item.id == id);
  if (filtro) {
    return res.send({ mensagem: "Produto já adicionado" });
  }

  carrinho.push(produto);
  res.send(produto);
};

exports.deleteProduto = (req, res) => {
  const id = req.params.id;
  const index = carrinho.findIndex((item) => item.id == id);

  if (index !== -1) {
    carrinho.splice(index, 1);
    return res.send({ mensagem: "Produto removido com sucesso", carrinho });
  }

  res.status(404).send({ mensagem: "Produto não encontrado no carrinho" });
};
