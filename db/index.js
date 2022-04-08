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
      VALUES($1, $2, $3, $4,$5,$6) 
      RETURNING *;
    `,
      [species, style, description, flavor, weight, price]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// ---------------------------------
async function dropTables() {
  try {
    console.log("Dropping Tables");
    await client.query(`
    DROP TABLE IF EXISTS user_meats;
    DROP TABLE IF EXISTS meat;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS users;`);
  } catch (error) {
    console.log("Error Dropping Tables");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Creating Tables");

    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email varchar(255) UNIQUE NOT NULL,
      password varchar(255) NOT NULL
    );
    
    CREATE TABLE meat (
      id SERIAL PRIMARY KEY,
      species varchar (255) NOT NULL,
      style varchar (255) NOT NULL,
      description varchar(255),
      flavor varchar (255) NOT NULL,
      weight DECIMAL NOT NULL,
      price DECIMAL NOT NULL
    );
    
    CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      fufilled BOOLEAN DEFAULT false
    );
    
    CREATE TABLE user_meats (
      id SERIAL PRIMARY KEY,
      meat_id INTEGER REFERENCES meat(id),
      user_id INTEGER REFERENCES users(id)
    );`);
  } catch (error) {
    console.log("Error Creating Tables");
    throw error;
  }
}
async function createInitialUsers() {
  try {
    console.log("Creating Users");
    await createUser({
      email: "hotmeat1@hotmail.com",
      password: "Greasy1",
    });
    await createUser({
      email: "lilsmokey@bigdogzonly.com",
      password: "Greasy2",
    });
    await createUser({
      email: "papaSausage@gmail.com",
      password: "Carved1",
    });
  } catch (error) {
    console.log("Error Creating Users");
    throw error;
  }
}

async function createInitialMeats() {
  console.log("Making Meats");
  try {
    await createMeat({
      species: "Cow",
      style: "Ground Beef",
      description: "tender, low fat, grass fed",
      flavor: "plain",
      weight: 1,
      price: 5,
    });
    await createMeat({
      species: "Gnarwall",
      style: "Filet",
      description:
        "Angled from the northern most part of the north sea, sliced and diced for your pallet pleasure",
      flavor: "delicious",
      weight: 0.25,
      price: 700,
    });
    await createMeat({
      species: "Bison",
      style: "Burger",
      description:
        "Hunted by Buffalo Bill himself, Has been marinating for 100 years",
      flavor: "American",
      weight: 20,
      price: 1000,
    });
  } catch (error) {
    console.log("Error making Meat");
    throw error;
  }
}

dropTables();
createTables();
createInitialUsers();
createInitialMeats();

client.connect();

module.exports = client;
