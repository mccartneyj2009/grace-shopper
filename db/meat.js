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

module.exports = { createMeat, getAllMeats };
