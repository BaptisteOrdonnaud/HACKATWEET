var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const { checkBody } = require('../modules/checkBody');

router.post('/', (req, res) => {
    if (!checkBody(req.body, ['message', 'idUser', 'like'])) {
        res.json({ result: false });

        return;
    } else {
        console.log(req.body.idUser)
        const newTweet = new Tweet({
            idUser: req.body.idUser,
            date: new Date,
            message: req.body.message,
            like: req.body.like
        })

        newTweet.save().then(newDoc => {
            res.json({ result: true, tweet: newDoc });
        });
    }
});





module.exports = router;