var orm = require("../config/orm.js");

var book = {
    all: function (cb) {
        orm.selectAll(function (result) {
            cb(result);
        })
    }
}

module.exports = book;