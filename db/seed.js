require("dotenv").config();

const client = require("./client");
const { createUser } = require("./users");
const { createMeat } = require("./meat");
const { createOrder } = require("./orders");
const { createUserMeats } = require("./user_meats");

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
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        administrator BOOLEAN DEFAULT false
        );
      
        CREATE TABLE meat (
        id SERIAL PRIMARY KEY,
        species VARCHAR (255) NOT NULL,
        style VARCHAR (255) NOT NULL,
        description VARCHAR(255),
        flavor varchar (255) NOT NULL,
        image TEXT,
        price DECIMAL NOT NULL
        );
        
        CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        fulfilled BOOLEAN DEFAULT false
        );
        
        CREATE TABLE user_meats (
        id SERIAL PRIMARY KEY,
        meat_id INTEGER REFERENCES meat(id),
        user_id INTEGER REFERENCES users(id),
        meat_qty DECIMAL NOT NULL
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
            first_name: "Tony",
            last_name: "Romano",
            administrator: true,
        });
        await createUser({
            email: "lilsmokey@bigdogzonly.com",
            password: "Greasy2",
            first_name: "James",
            last_name: "McCartney",
        });
        await createUser({
            email: "papaSausage@gmail.com",
            password: "Carved1",
            first_name: "PJ",
            last_name: "Witt",
        });
    } catch (error) {
        console.log("Error Creating Users");
        throw error;
    }
}

async function createInitialOrders() {
    try {
        console.log("Creating Orders");
        await createOrder({
            user_id: 1,
            fulfilled: false,
        });
        await createOrder({
            user_id: 2,
            fulfilled: false,
        });
        await createOrder({
            user_id: 3,
            fulfilled: false,
        });
    } catch (error) {
        console.log("Error Creating Orders");
        throw error;
    }
}
async function createInitialUserMeats() {
    try {
        // console.log("Creating User_Meats");
        // await createUserMeats({
        //     meat_id: 1,
        //     user_id: 1,
        // });
        // await createUserMeats({
        //     meat_id: 2,
        //     user_id: 2,
        // });
        // await createUserMeats({
        //     meat_id: 3,
        //     user_id: 3,
        // });
    } catch (error) {
        console.log("Error Creating User_Meats");
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
            image: "https://images.unsplash.com/photo-1613985208269-e8f4dbcc7576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
            price: 5,
        });

        await createMeat({
            species: "Cow",
            style: "Steak",
            description: "tender, low fat, grass fed",
            flavor: "Juicy",
            image: "https://cdn.stocksnap.io/img-thumbs/960w/steak-fries_RQOP43KKJV.jpg",
            price: 5,
        });
        await createMeat({
            species: "Gnarwall",
            style: "Filet",
            description:
                "Angled from the northern most part of the north sea, sliced and diced for your pallet pleasure",
            flavor: "delicious",
            image: "https://cdn.pixabay.com/photo/2021/09/16/04/31/animal-6628302_1280.png",
            price: 700,
        });
        await createMeat({
            species: "Bison",
            style: "Burger",
            description:
                "Hunted by Buffalo Bill himself, Has been marinating for 100 years",
            flavor: "American",
            image: "https://cdn.stocksnap.io/img-thumbs/960w/meat-beef_U8E3HKTZF9.jpg",
            price: 1000,
        });
        await createMeat({
            species: "Chicken",
            style: "Breast",
            description: "Grass-fed, free-roaming chicken",
            flavor: "Tender",
            image: "https://cdn.stocksnap.io/img-thumbs/960w/grilled-chicken_34LMASJHCT.jpg",
            price: 9,
        });
        await createMeat({
            species: "Chicken",
            style: "Wings",
            description: "Perfect wings for watching sporting events",
            flavor: "Spicy",
            image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
            price: 9,
        });
        await createMeat({
            species: "Turkey",
            style: "White Meat",
            description:
                "Perfect for Thanksgiving, this bird will make you the talk of the holiday",
            flavor: "Juicy",
            image: "https://stocksnap.io/photo/grilled-chicken-34LMASJHCT",
            price: 8,
        });
        await createMeat({
            species: "Turkey",
            style: "Dark Meat",
            description: "Deicious tender dark meat of Turkey",
            flavor: "Tender",
            image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            price: 8,
        });
        await createMeat({
            species: "Pork",
            style: "Bacon",
            description: "Thick cut bacon",
            flavor: "Thick",
            image: "https://images.unsplash.com/photo-1606851682837-019baf2e8da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            price: 8,
        });
        await createMeat({
            species: "Pork",
            style: "Chops",
            description: "Premium cut pork chops",
            flavor: "Tender",
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
            price: 16,
        });
        await createMeat({
            species: "Salmon",
            style: "Fish",
            description: "Freshly caught",
            flavor: "Fresh",
            image: "https://images.unsplash.com/photo-1585325701172-fcb7d019242d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
            price: 16,
        });
        await createMeat({
            species: "Grouper",
            style: "Fish",
            description: "Freshly caught off the coast of Florida",
            flavor: "Blackened",
            image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
            price: 20,
        });
    } catch (error) {
        console.log("Error making Meat");
        throw error;
    }
}

const seedDB = async () => {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialMeats();
    await createInitialOrders();
    await createInitialUserMeats();
    client.end();
};

seedDB();
