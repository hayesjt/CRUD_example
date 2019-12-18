var express = require("express");
var router = express.Router();
var book = require("../models/books")

router.get("/", function (req, res) {
    book.all(function (data) {
        let hbsobject = {
            books: data
        }
        res.render("index", hbsobject)
    })
})

module.exports = router;