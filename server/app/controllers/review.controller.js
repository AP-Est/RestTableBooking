/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../models');
const Review = db.review;

exports.review = (req, res) => {
    if (req.type === 'POST') {
        const reviews = new Review({
            username: req.body.username,
            comment: req.body.comment,
        });
        reviews.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
        });

        res.send({ reviews });
    }
    if (req.type === 'GET') {
        Review.find({}).exec((err, reviews) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send(reviews);
        });
    }
};
