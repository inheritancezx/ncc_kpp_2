const express = require("express")
const app = express()
const dbconnection = require('./connection')
const port = 3000

const db = []

// app.get("/", (req, res) => {
//     res.send("Hello ncc!");
// });

// app.get("/page1", (req, res) => {
//     res.send("kiw page one");
// });

// app.get("/db", (req, res) => {
//     res.status(200).json({ data: db});
// });

app.get("/", (req, res) => {
    const querycall = "select * from zoo";

    dbconnection.query(querycall, (err, rows, field) => {
        if(err) {
            return res.status(500).json({message: "there is an error", error: err});
        }

        res.status(200).json({data: rows});
    });
    
    return 0;
});

app.post("/createdata", (req, res) => {
    const { type, name, age, endangered } = req.body;

    // Validate incoming data
    if (!type || !name || !age || !endangered) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if age is a valid number
    if (isNaN(age) || age < 0) {
        return res.status(400).json({ message: "Age must be a non-negative number" });
    }

    // Check if 'endangered' is a boolean
    if (typeof endangered !== 'boolean') {
        return res.status(400).json({ message: "'endangered' must be a boolean" });
    }

    // putting fields data to values
    const querycall = "INSERT INTO zoo (z_type, z_name, z_age, z_if_endangered) VALUES (?, ?, ?, ?)";
    const values = [type, name, age, endangered];

    dbconnection.query(querycall, values, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "There was an error creating data", error: err });
        }

        res.status(200).json({ message: "Data created successfully", data: result });
    });
});


app.post("/createdata", (req, res) => {
    const { type, name, age, endangered } = req.body;

    // putting fields data to values
    const querycall = "insert into zoo (z_type, z_name, z_age, z_if_endangered) values (?, ?, ?, ?)";
    const values = [type, name, age, endangered];

    dbconnection.query(querycall, values, (err, result, field) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "there is an error", error: err });
        }

        res.status(200).json({ message: "data created successfully", data: result });
    });
});


app.listen(port, () => console.log(`server listen on port ${port}`))
