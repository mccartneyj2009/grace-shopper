const client = require("./client");

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

async function getAllUserMeats() {
  try {
    const { rows } = await client.query(`
        SELECT * FROM user_meats;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function deleteUserMeat(id) {
  try {
    await client.query(
      `
        DELETE FROM user_meats WHERE "meat_id" = $1`,
      [id]
    );

    const {
      rows: [meat],
    } = await client.query(
      `
    DELETE FROM user_meats WHERE id = $1`,
      [id]
    );
    console.log(meat);
    return meat;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUserMeats, getAllUserMeats, deleteUserMeat };
