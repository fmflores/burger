const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

/* router.get('/', function(req, res) {
    res.render('index');
}) */

router.get('/', function(req, res) {
    burger.selectAll(function(burger_data) {
        console.log(burger_data);
        res.render("index", {burger_data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId});
    });
});

/* router.put("api/burgers/:id", function(req, res) {
    const condition
}) */

module.exports = router;