const client = require("./client");

async function createOrder({ user_id, fufilled }) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
      INSERT INTO orders(user_id, fufilled) 
      VALUES($1, $2)
      RETURNING *;
    `,
            [user_id, fufilled]
        );
        return user;
    } catch (error) {
        throw error;
    }
}

async function getAllOrders() {
    try {
        const { rows } = await client.query(
            `
      SELECT * FROM orders;
    `
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createOrder, getAllOrders };
