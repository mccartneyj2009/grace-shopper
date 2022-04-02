const { Client } = require("pg");

const client = new Client(
  process.env.DATABASE_URL,
  { ssl: true } || {
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  }
);

client.connect();

module.exports = client;
