const express = require ('express');
const router = express.Router();

router.get("/", (req, res) => {
    const date = [{
        createdAt : new Date(),
    }]
    //no need to put the extension  .ejs ex: res.render("homepage.ejs"); when we set the view engine on the index.js
    res.render("index", { date: date});
});
router.get("/contact", (req, res) => {
    const date = [{
        createdAt : new Date(),
    }]
    //no need to put the extension  .ejs ex: res.render("homepage.ejs"); when we set the view engine on the index.js
    res.render("contact",{ date: date});
});
router.get("/parcours", (req, res) => {
    const date = [{
        createdAt : new Date(),
    }]
    res.render("parcours",{ date: date})
});

module.exports = router;