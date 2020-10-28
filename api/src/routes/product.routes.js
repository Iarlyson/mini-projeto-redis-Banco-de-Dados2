const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// Rota responsável por criar um novo 'produto': (POST): localhost:3000/api/produtos
router.post('/produtos', productController.criarProduto);
// Rota responsável por listar todos os 'produtos': (GET): localhost:3000/api/produtos
router.get('/produtos', productController.listarTodosProdutos);
// Rota responsável por selecionar 'produto' pelo 'Id': (GET): localhost:3000/api/produtos/:id
router.get('/produtos/:id', productController.buscaProdutoPorId);
//  Rota responsável por deletar 'produto' pelo 'Id': (DELETE): localhost:3000/api/produtos/:id
router.delete('/produtos/:id', productController.deletarProdutoId);

module.exports = router;