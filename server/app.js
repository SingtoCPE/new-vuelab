const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "singto11442525",
  database: "new_employee"
});

app.get("/employee", (req, res) => {
  let sql = "SELECT * FROM new_employee.new_table";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.post("/employee/del", (req, res) => {
  let sql = `DELETE FROM new_employee.new_table WHERE id=${req.body.id};`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
