var connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(obj) {
    var arr = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + obj[key]);
        }
    }
    return arr.toString();
}

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