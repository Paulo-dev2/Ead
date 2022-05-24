const mysql = require('mysql');
const db = mysql.createConnection({
    host:           'localhost',
    user:           'root',
    password:       '',
    database:       'helix'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySql conectado')
});

module.exports = db;

