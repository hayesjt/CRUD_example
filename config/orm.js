var connection = require("./connection");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM books"
        connection.query(queryString, function (err, res){
            if (err) throw err;
            cb(res);
        })
    },
}

module.exports = orm;