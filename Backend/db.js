const mysql = require("mysql")
const connection = mysql.createConnection({
    port: '3306',
    host: 'localhost',
    password: '',
    database: 'book_store',
    user: 'root'
});
module.exports = connection;
