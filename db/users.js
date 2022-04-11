const client = require("./client.js");
const bcrypt = require("bcrypt");

async function createUser({ email, password, first_name, last_name }) {
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    try {
        const {
            rows: [user],
        } = await client.query(
            `
      INSERT INTO users(email, password, first_name, last_name) 
      VALUES($1, $2, $3, $4) 
      ON CONFLICT (email) DO NOTHING 
      RETURNING *;
    `,
            [email, hashedPassword, first_name, last_name]
        );

        delete user.password;

        return user;
    } catch (error) {
        throw error;
    }
}

async function getUser({ email, password }) {
    try {
        const user = getUserByEmail(email);
        const hashedPassword = user.password;
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);

        if (passwordsMatch) {
            delete user.password;
            return user;
        }
    } catch (error) {
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
          SELECT * FROM users
          WHERE email = $1;
      `,
            [email]
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

module.exports = { createUser, getAllUsers, getUser, getUserByEmail };
