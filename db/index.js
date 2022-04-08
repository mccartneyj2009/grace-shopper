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

async function createMeat({
  species,
  style,
  description,
  flavor,
  weight,
  price,
}) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO meat(species,style,description,flavor,weight,price) 
      VALUES($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `,
      [species, style, description, flavor, weight, price]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

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

async function createUserMeats({ meat_id, user_id, order_id }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO user_meats(meat_id, user_id, order_id) 
      VALUES($1, $2, $3)
      RETURNING *;
    `,
      [meat_id, user_id, order_id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

// ---------------------------------

async function getAllMeats() {
  try {
    const response = await client.query(
      `
      SELECT * FROM meat;
    `
    );
    return response.rows;
  } catch (error) {
    throw error;
  }
}

async function getAllOrders() {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      SELECT * FROM orders;
    `
    );
    return orders;
  } catch (error) {
    throw error;
  }
}

getAllMeats().then((value) => {
  console.log(value);
});

client.connect();

module.exports = {
  client,
  createMeat,
  createOrder,
  createUser,
  createUserMeats,
  getAllMeats,
  getAllOrders,
};
