const db = require("../config/database");

// ==> Método responsável por criar um novo 'Usuario':



exports.createUser = async (req, res) => {
  const { nome} = req.body;
  const { rows } = await db.query(
    "INSERT INTO usuario (nome) VALUES ($1)",
    [nome]
  );

  res.status(201).send({
    message: "Usuári novo Cadastrado",
    body: {
      user: { nome }
    },
  });
};
