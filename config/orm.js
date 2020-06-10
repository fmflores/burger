var connection = require("../config/connection.js")

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, vals, cb) {
        connection.query('INSERT INTO ' + tableInput + ' (burger_name) VALUES ("' + vals + '");', function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }

}

module.exports = orm;