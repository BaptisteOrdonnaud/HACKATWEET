const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: Date,
    message: String,
    like: Boolean,

});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;