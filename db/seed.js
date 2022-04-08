require("dotenv").config();
const client = require("./");

const seedDB = async () => {
    await client.query(`
    DROP TABLE IF EXISTS products;

    CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255));
    CREATE TABLE meat (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255));
    CREATE TABLE orders (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255));
    CREATE TABLE user_meats (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255));

    INSERT INTO products (title) VALUES ('Acer Nitro 5 Laptop');
    `);

    console.log("DB SEEDED.");
};

seedDB();
