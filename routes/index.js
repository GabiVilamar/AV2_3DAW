var express = require('express');
var router = express.Router();

 /* GET home page. */
 router.get('/', async function(req, res, next) {
     try {
        const results = await global.db.selectProduto();
        console.log(results);
        res.render('index', { title: 'Bem vinde',
                              results });
     } catch(error) {
         res.redirect('/?erro=' +error);
     }                      
 });
 /*GET new page.*/
router.get('/new', function(req, res, next) {
    res.render('new', { title: 'Cadastro de Disciplinas', results: {}, action:"/new" });
  }); 

router.post('/new', async function(req, res) {
    const id = !req.body.id ? null : parseInt(req.body.id);
    const cod_barras = !req.body.cod_barras ? null : parseInt(req.body.cod_barras);
    const nome = req.body.nome;
    const fabricante = req.body.fabricante;
    const categoria = req.body.categoria;
    const tipo_produto = req.body.tipo_produto;
    const preco_venda = !req.body.preco_venda ? null : parseInt(req.body.preco_venda);
    const quantidade_estoque = !req.body.quantidade_estoque ? null : parseInt(req.body.quantidade_estoque);
    const peso = !req.body.peso ? null : parseInt(req.body.peso);
    const descricao = req.body.descricao;
    const imagem = req.body.descricao;
    const data_cadastro = req.body.data_cadastro;
    const status = req.body.status;

    try {
        await global.db.insertProduto({id, cod_barras, nome, fabricante, categoria, tipo_produto, preco_venda, quantidade_estoque, peso, descricao, imagem, data_cadastro, status });
        res.redirect('/?new=true');
      }
      catch(error){
        res.redirect('/?erro=' + error.message);
      }
    });

module.exports = router;
