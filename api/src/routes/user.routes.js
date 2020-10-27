const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/usuario', userController.createUser);
router.get('/usuario', userController.listarUser);
router.put('/usuario/:id', userController.atualizarUserId);
router.delete('/usuario/:id', userController.deletarUserId);

module.exports = router;