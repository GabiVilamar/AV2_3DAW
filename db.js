// async function connect(){
//     if(global.connection && global.connection.state !== 'disconnected')
//     return global.connection;
    
//     const mysql = require('mysql2/promise');
//     const connection = await mysql.createConnection(`mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DB}`);
//     //     host: 'localhost',
//     //     port: 3306,
//     //     user: 'root',
//     //     password: 'annamanunico',
//     //     database: 'admin_produtos'
//     // });

//     console.log("Conectou ao MySql");
//     global.connection = connection;
//     return global.connection;
// }
// module.exports = { connect };

// // async function selectProduto(){
// //     const conn = await connect();
// //     const [rows] = await conn.query('SELECT * FROM produtos;');
// //     return rows;
// // }

// // module.exports = { 
// //     selectProduto
// // };

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;
    
   const mysql = require('mysql2/promise');
//    const connection = await mysql.createConnection(`mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DB}`);
     const connection = await mysql.createConnection({
          host: 'localhost',
          port:3306,
          user:'root',
          password:'annamanunico',
          database:'admin_produtos_ximbole'
      });

    console.log("Conectou no MySQL");
    global.connection = connection;
    return global.connection;    
}
connect();

async function selectProduto(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM produtos;');
    return rows;
}
async function insertProduto(produtos) {
    const conn = await connect();
    const sql = 'INSERT INTO produtos (id, cod_barras, nome, fabricante, categoria, tipo_produto, preco_venda, quantidade_estoque, peso, descricao, imagem, data_cadastro, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);';
    return await conn.query(sql, [produtos.id, produtos.cod_barras, produtos.nome, produtos.fabricante, produtos.categoria, produtos.tipo_produto, produtos.preco_venda, produtos.quantidade_estoque, produtos.peso, produtos.descricao, produtos.imagem, produtos.data_cadastro, produtos.status]);
}

// async function findUser(username) {
//     const conn = await connect();
//     const [rows] = await conn.query(`SELECT * FROM users WHERE username=? LIMIT 1`, [username]);
//     if (rows.lenght > 0)
//     return rows[0];
//     else return null;
// }

// async function findUserById(id) {
//     const conn = await connect();
//     const [rows] = await conn.query(`SELECT * FROM users WHERE id=? LIMIT 1`, [id]);
//     if (rows.lenght > 0)
//     return rows[0];
//     else return null;
// }
// module.exports = { connect, findUser, findUserById };
module.exports = { selectProduto, insertProduto };