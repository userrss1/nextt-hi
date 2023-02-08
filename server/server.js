const express = require("express")
const cors = require("cors")
const pool = require("./database")
const { response } = require("express")


const app = express()


app.use(express.json())
app.use(cors())


app.post("/adduser", (req, res) => {
    const name = req.body["name"]
    const email = req.body["email"]
    const city = req.body["city"]

    const phoneNumber = req.body["phoneNumber"]


    console.log("name:" + name);
    console.log("email:" + email);
    console.log("city:" + city);
    console.log("phoneNumber:" + phoneNumber);

    const insertSTMT = `INSERT INTO users_all ( name, email, city, phoneNumber ) VALUES ( '${name}', '${email}', '${city}', '${phoneNumber}' );`;
    pool.query(insertSTMT).then((response) => {
        console.log("Data Saved");
        console.log(response)
    })
        .catch((err) => {
            console.log(err);
        })
    console.log(req.body)
    res.send("Response Received: " + req.body)
})

const allData = `SELECT * FROM users_all`
app.get("/adduser", (req, res) => {
    pool.query(allData).then(result => {
        res.status(200).json({
            sTudentData: result.rows
        })
    })
    // res.send("Response Received: " + req.body)
})


let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function () {
    console.log("Server started successfully");
});