const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

let stringifyFile;

app.use(bodyParser.json());

app.get("/getNote", function(req, res) {
    fs.readFile("./myJSON.json", "utf8", function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(stringifyFile);
    });
});

app.post("/updateNote/:note", function(req, res) {
    stringifyFile += req.params.note;
    fs.writeFile("./myJSON.json", stringifyFile, function(err) {
        if (err) throw err;
        console.log("file updated");
    });
});

const server = app.listen(3000);
