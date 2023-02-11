/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const Review = mongoose.model(
    'Review',
    new mongoose.Schema({
        username: String,
        comment: String,
    })
);

module.exports = Review;
