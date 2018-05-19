// let orm = require('../config/orm.js');
// //
// // let burger = {
// //     selectAll: function(callback) {
// //         orm.selectAll("burgers", function(res) {
// //             callback(res);
// //         });
// //     },
// //
// //     insertOne: function(burger_name, callback) {
// //         orm.insertOne("burgers", cols, vals, function(res) {
// //             callback(res);
// //         });
// //     },
// //
// //     updateOne: function(objColVals, condition, callback) {
// //         orm.updateOne("burgers", objColVals, condition, function (res) {
// //             callback(res);
// //         });
// //     }
// //
// // };
// //
// // module.exports = burger;

const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};


module.exports = burger;