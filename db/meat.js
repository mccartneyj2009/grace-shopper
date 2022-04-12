const client = require("./client");

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

async function getAllMeats() {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM meat;
    `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getMeatById(meatId) {
  try {
    const { rows } = await client.query(`
      SELECT id, species, description,style, flavor, price
      FROM meat
      WHERE id = ${meatId}`);
    console.log(rows);
  } catch (error) {
    throw error;
  }
}

async function getMeatByStyle(style) {
  try {
    const { rows } = await client.query(
      `
        SELECT species, description, price
        FROM meat
        WHERE style = $1`,
      [style]
    );
    console.log(rows);
  } catch (error) {
    throw error;
  }
}
async function getMeatByPrice(cost) {
  try {
    const { rows } = await client.query(
      `
        SELECT species, style, description
        FROM meat
        WHERE price = $1`,
      [cost]
    );
    console.log(rows);
  } catch (error) {
    throw error;
  }
}
getMeatByPrice(700);
module.exports = { createMeat, getAllMeats, getMeatByPrice };
