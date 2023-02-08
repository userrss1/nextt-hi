const response = require("express")
const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "users_enquiry_details"
})

// const createQry = `CREATE TABLE users_all (
//     user_id serial PRIMARY KEY,
//     name VARCHAR (50) ,
//     email varchar
//     CONSTRAINT proper_email CHECK (email ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$') UNIQUE NOT NULL,
//     phoneNumber VARCHAR(10) CHECK(phoneNumber ~ '^[0-9]{10}$') UNIQUE NOT NULL,
//     city VARCHAR (50));`;


// pool.query(createQry).then((Response) => {
//     console.log("Table Created")
//       console.log(response)
// }).catch((err) => {
//     console.log(err);
// })

module.exports = pool;