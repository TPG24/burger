let orm = require('../config/orm.js');

let burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callback(res);
        });
    },

    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    }

};

module.exports = burger;