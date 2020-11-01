var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Salsirap200.',
        database: 'burgers_db'
    });
};

//makes connection
connection.connect();

//exports connection
module.exports = connection;