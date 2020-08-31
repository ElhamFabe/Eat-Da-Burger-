var mysql = require('mysql');
const e = require('express');


require('dotenv').config();
// console.log("process.env", process.env)
var connection;

// create connection information for sql databaase
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        // host
        host: "localhost",

        // Port
        Port: 3306,

        // user
        user: "root",

        // password
        password: process.env.MYSQL_KEY,

        // database
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;