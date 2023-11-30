const mongoose = require("mongoose");

const article = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    posterId: {
        type: String,
    },
    articlePicture: {
        type: String,
        default:"demo.jpg",
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = article;
