const client = require("./client");

async function createMeat({
    species,
    style,
    description,
    flavor,
    price,
    image,
}) {
    try {
        const {
            rows: [meat],
        } = await client.query(
            `
      INSERT INTO meat(species,style,description,flavor,price,image) 
      VALUES($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `,
            [species, style, description, flavor, price, image]
        );
        console.log(meat);
        return meat;
    } catch (error) {
        throw error;
    }
}
// createMeat("cow", "steak", "bland", "none", 39);
async function updateMeat({ id, description, price }) {
    try {
        const {
            rows: [meat],
        } = await client.query(
            `
    UPDATE meat SET  description = ($1), price = ($2) WHERE id =($3) RETURNING *;`,
            [description, price, id]
        );

        return meat;
    } catch (error) {
        throw error;
    }
}
async function deleteMeat(id) {
    try {
        const {
            rows: [meat],
        } = await client.query(
            `
      DELETE FROM meat WHERE id = $1`,
            [id]
        );
        console.log(meat);
        return meat;
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
        const {
            rows: [meat],
        } = await client.query(`
      SELECT *
      FROM meat
      WHERE id = ${meatId}`);
        console.log(meat);
        return meat;
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
        return rows;
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
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getAllStyles() {
    try {
        const { rows } = await client.query(`
    SELECT style FROM meat`);
        console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getMeatByAllSpecies() {
    try {
        const { rows } = await client.query(`
        SELECT species FROM meat`);
        console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getMeatBySingleSpecies(species) {
    try {
        const { rows } = await client.query(
            `
        SELECT style, description, price 
        FROM meat
        WHERE species = $1`,
            [species]
        );
        console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMeat,
    updateMeat,
    getAllMeats,
    getMeatById,
    deleteMeat,
    getMeatByPrice,
    getMeatByStyle,
    getAllStyles,
    getMeatByAllSpecies,
    getMeatBySingleSpecies,
};
