
var connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, queryCallback)=>{
        const queryStr = 'SELECT * FROM ??'
        connection.query(queryStr, [tableName], (err,res)=>{
            if(err) throw err;
            console.log(res)
            queryCallback(res)
        })
    },

    insertOne: (tableName, colName, burgerName, queryCallback)=>{
        const queryStr = 'INSERT INTO ?? (??) VALUES (?)'
        connection.query(queryStr, [tableName, colName, burgerName], (err,res)=>{
            if(err) throw err;
            console.log(res)
            queryCallback(res)
        })
    },

    UpdateOne: (tableName, colName, devoured, id, queryCallback)=>{
        const queryStr = 'UPDATE ?? SET ??=? WHERE id=?'
        connection.query(queryStr, [tableName, colName, devoured, id], (err,res)=>{
            if(err) throw err;
            console.log(res)
            queryCallback(res)
        })
    }
}

module.exports=orm;