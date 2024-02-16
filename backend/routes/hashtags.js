const express = require('express');
const router = express.Router();
const Hashtag = require('../models/hashtags');
const Tweet = require('../models/tweets');

// Route pour récupérer les tweets liés à un hashtag spécifique
router.get('/:hashtag', async (req, res) => {
    const hashtag = req.params.hashtag;

    try {
        const hashtagObject = await Hashtag.findOne({ name: hashtag }).populate('tweets');

        if (!hashtagObject) {
            return res.status(404).json({ message: 'Hashtag not found' });
        }

        const tweets = hashtagObject.tweets;
        res.json(tweets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;

