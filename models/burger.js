//
var orm = require("../config/orm.js");

var burger = {
    selectAll:(queryCallback)=>{
        orm.selectAll('burgers', queryCallback)
    },

    insertOne:(burgerName, queryCallback)=>{
        orm.insertOne('burgers', 'burger_name', burgerName, queryCallback)
    },

    updateOne:(burgerId, queryCallback)=>{
        orm.UpdateOne('burgers', 'devoured', true, burgerId, queryCallback)
    },

    restoreOne: function(burger_id, queryCallback) {
        orm.UpdateOne('burgers', 'devoured', false, burger_id, queryCallback)
    }
}

module.exports=burger;
