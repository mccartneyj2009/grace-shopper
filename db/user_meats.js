const client = require("./client");

async function createUserMeats({ meat_id, user_id, meat_qty }) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
      INSERT INTO user_meats(meat_id, user_id, meat_qty) 
      VALUES($1, $2, $3)
      RETURNING *;
    `,
            [meat_id, user_id, meat_qty]
        );
        return user;
    } catch (error) {
        throw error;
    }
}

async function getAllUserMeats(user_id) {
    try {
        const { rows } = await client.query(
            `
        SELECT * FROM user_meats WHERE user_id = $1;
        `,
            [user_id]
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

async function deleteUserMeats(id) {
    try {
        const { rows } = await client.query(
            `
            DELETE FROM user_meats WHERE "meat_id"=$1;
            `,
            [id]
        );
        console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createUserMeats, getAllUserMeats, deleteUserMeats };
