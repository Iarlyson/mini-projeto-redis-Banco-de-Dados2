const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/produtos', productController.criarProduto);
// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/produtos', productController.listarTodosProdutos);
// ==> Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/produtos/:id', productController.buscaProdutoPorId);
// ==> Rota responsável por deletar 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/produtos/:id', productController.deletarProdutoId);

module.exports = router;