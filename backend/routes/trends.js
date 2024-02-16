var express = require('express');
var router = express.Router();
const Hashtag = require('../models/hashtags');

/* GET home page. */
router.get('/', function (req, res, next) {
    Hashtag.find()
        .then(hashtags => {
            res.json({ result: true, trend: hashtags });
            console.log(hashtags)
        });
});

module.exports = router;
