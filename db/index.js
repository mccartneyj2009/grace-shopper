const { Client } = require("pg");

const client = new Client({
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

client.connect();

module.exports = client;
