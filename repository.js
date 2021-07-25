const { Pool } = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'produtos_ximbole',
    password: 'postgres',
    port: 5432,
})

const getProdutos = (request, response) => {
    pool.query('SELECT * FROM produtos ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getProdutosById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM produtos WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createProduto = (request, response) => {
    const { codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded } = request.body
  
    pool.query('INSERT INTO produtos (codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded) VALUES ($1, $2, $3)', [codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Produto adicionado com sucesso.`)
    })
  }
  
//   const updateProduto = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded } = request.body
  
//     pool.query(
//       'UPDATE pessoas SET nome = $1, email = $2, telefone = $3 WHERE id = $4',
//       [nome, email, telefone, id],
//       (error, result) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`Pessoa ${id} atualizada com sucesso.`)
//       }
//     )
//   }
  
  const deleteProduto = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM produtos WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto removido com sucesso com o identificador: ${id}`)
    })
  }
  
  module.exports = {
    getProdutos,
    getProdutosById,
    createProduto,
    // updatePessoa,
    deleteProduto
  };