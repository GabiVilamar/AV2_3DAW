const db = require("../config/database");
// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO produtos (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );
  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price }
    },
  });
};