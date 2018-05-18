let connection = require('./connection.js');


let orm = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        }, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: function (burger_id, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true}, {id: burger_id}], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;