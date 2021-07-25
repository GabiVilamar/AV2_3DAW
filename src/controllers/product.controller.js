const db = require("../config/database");
// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
  const { codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded } = request.body
  const { rows } = await db.query(
    "INSERT INTO produtos (codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
    [codigo_de_barras, nome, fabricante, categoria, tipo_de_produto, preco_de_venda, quantidade_em_estoque, peso, descricao, link_da_imagem, data_cadastro, status_activaded ]
  );
  res.status(201);
  response.render('index');
  //   message: "Product added successfully!",
  //   body: {
  //     product: { nome, codigo_de_barras, categoria }
  //   },
  // });
};