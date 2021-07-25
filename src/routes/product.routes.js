const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');
// ==> Definindo as rotas do CRUD - 'Product':
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/admin-loja-ximbole_bahiano/products
router.post('/products', productController.createProduct);
module.exports = router;
