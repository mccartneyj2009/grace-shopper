const client = require("./");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

module.exports = {
  getProducts,
};
