const router = require('express-promise-router')();
const carrinho = require('../controllers/carrinho.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/carrinho/:id', carrinho.criarcarrinho);
// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/carrinho/:id', carrinho.listarCarrinho);


module.exports = router;