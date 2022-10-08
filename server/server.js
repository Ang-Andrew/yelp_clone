require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db/")

app.use(express.json());

// Defining Routes
// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants")
        console.log(results)
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                retaurants: results.rows
            },
        })
    } catch (error) {
        console.log(error)
    }
})

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const results = await db.query(`SELECT * FROM RESTAURANTS where id = ${req.params.id}`)
        console.log(results)
        res.status(200).json({
            status: "success",
            data: {
                retaurant: results.rows[0]
            }
        })
    } catch (error) {
        console.log(error)
    }
})

// create a restaurant
app.post("/api/v1/restaurants/", async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body["price range"])
        const results = await db.query(`INSERT INTO RESTAURANTS (name, location, price_range) values ('${req.body.name}', '${req.body.location}', ${req.body["price range"]})`)
        res.status(201).json({
            status: "success",
        })

    } catch (error) {
        console.log(error)
    }
})

// update
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        const results = await db.query(`UPDATE restaurants SET name = '${req.body.name}', location = '${req.body.location}', price_range = ${req.body["price range"]}`)
        res.status(200).json({
            status: "success",
        })

    } catch (error) {
        console.log(error)
    }
})

// delete
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        const results = await db.query(`DELETE FROM restaurants where id = ${req.params.id}`)
        res.status(204).json({
            status: "success",
        })
    } catch (error) {
        console.log(error)
    }
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up listening on port ${port}!`);
})