const { Client } = require("pg");

let connectionString = {
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
};

if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL + "?ssl=true";
}

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

client.connect();

module.exports = client;
