const client = require("./client.js");

async function createUser({ email, password }) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
      INSERT INTO users(email, password) 
      VALUES($1, $2) 
      ON CONFLICT (email) DO NOTHING 
      RETURNING *;
    `,
            [email, password]
        );

        return user;
    } catch (error) {
        throw error;
    }
}

async function getAllUsers() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM users;
        `);
        for (const row of rows) {
            delete row.password;
        }
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser, getAllUsers };
