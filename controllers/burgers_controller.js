let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

router.delete("/api/burgers.:id", function(req, res) {
    burger.destroy({
        where: {
            id: req.body.id
        }
    }).then(function(result) {
        res.json(result);
    })
})
});

module.exports = router;

