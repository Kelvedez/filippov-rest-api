const mysql = require("mysql2");

const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",            
    database: "MITE-41_Filippov",  
    password: "pass"  
}).on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
});

module.exports = db_connection;