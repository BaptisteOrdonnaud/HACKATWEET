const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    count: {
        type: Number,
        default: 1,
    },
    tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tweets' }], // Ajoute un champ pour stocker les références aux tweets
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

module.exports = Hashtag;