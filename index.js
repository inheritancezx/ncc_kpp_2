const express = require("express")
const app = express()
const dbconnection = require('./connection')
const port = 3000

const db = []

app.get("/", (req, res) => {
    res.send("Hello mci!");
});

app.get("/page1", (req, res) => {
    res.send("kiw page one");
});

app.get("/db", (req, res) => {
    res.status(200).json({ data: db});
});

app.get("/myssql-db", (req, res) => {
    const querycall = "select * from zoo";

    dbconnection.query(querycall, (err, rows, field) => {
        if(err) {
            return res.status(500).json({message: "there is an error", error: err});
        }

        res.status(200).json({data: rows});
    });
    
    return 0;
});

app.listen(port, () => console.log(`server listen on port ${port}`))
