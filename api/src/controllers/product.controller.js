const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.criarProduto = async (req, res) => {
  const {descricao, preco} = req.body;
  const { rows } = await db.query(
    "INSERT INTO produto (descricao, preco) VALUES ($1, $2)",
    [descricao, preco]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { descricao, preco }
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listarTodosProdutos = async (req, res) => {
  const response = await db.query('SELECT * FROM produto ORDER BY id ASC');
  res.status(200).send(response.rows);
};


// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.buscaProdutoPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT id FROM produto WHERE id = $1', [id]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].id)
}




