var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const Hashtag = require('../models/hashtags');
const { checkBody } = require('../modules/checkBody');

router.post('/', async (req, res) => {

    if (!checkBody(req.body, ['message', 'idUser'])) {
        res.json({ result: false });

        return;
    }
    else {
        console.log(req.body.idUser)
        const hashtags = req.body.message.match(/#(\w+)/g) || [];

        const newTweet = new Tweet({
            idUser: req.body.idUser,
            date: new Date,
            message: req.body.message,
            like: false
        })

        try {
            const savedTweet = await newTweet.save();

            // Mise à jour de la collection "hashtags"
            for (const tag of hashtags) {
                const existingHashtag = await Hashtag.findOne({ name: tag });
                if (existingHashtag) {
                    existingHashtag.count += 1;
                    existingHashtag.tweets.push(savedTweet._id);
                    await existingHashtag.save();
                } else {
                    await Hashtag.create({
                        name: tag,
                        count: 1,
                        tweets: [savedTweet._id],
                    });
                }
            }

            res.json({ result: true, tweet: savedTweet });
        } catch (error) {
            console.error(error);
            res.status(500).json({ result: false, message: 'Une erreur est survenue lors de la création du tweet.' });
        }

    }
});

router.get('/', (req, res) => {
    Tweet.find().populate('idUser')
        .then(tweet => {
            res.json({ tweets: tweet });
            console.log(tweet)
        });
});

router.delete("/:idUser", (req, res) => {
    Tweet.deleteOne({
        idUser: req.body.idUser,
    }).then(deletedTweet => {
        res.json({ result: true });
    });
});





module.exports = router;