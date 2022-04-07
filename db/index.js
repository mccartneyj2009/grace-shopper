const { Client } = require("pg");
const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost:5432/grace-shopper"
);
// let client;

// if (process.env.DATABASE_URL) {
//   client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//   });
// } else {
//   client = new Client({
//     password: process.env.DB_PASSWORD,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//   });
// }

async function createTables() {
  try {
    console.log("Creating Tables");

    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email varchar(255) UNIQUE NOT NULL,
      password varchar(255) NOT NULL
    )`);
  } catch (error) {
    console.log("Error Creating Tables");
    throw error;
  }
}

client.connect();

module.exports = client;
