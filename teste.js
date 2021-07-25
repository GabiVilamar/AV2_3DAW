const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const port = 3000;

const repository = require('./repository');

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(port, () => {
    console.log(`Servidor rodando bonitão na porta ${port}.`)
})

app.get('/', (request, response)=> {
    response.status(200);
    response.json({ aplicação: 'CRUD DE PRODUTOS'})
})

app.get('/produtos', repository.getProdutos);
app.get('/produtos/:id', repository.getProdutosById);
app.post('/produtos', repository.createProduto);
// app.put('/produtos/:id', repository.updateProduto);
app.delete('/produtos/:id', repository.deleteProduto);