/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../models');
const Review = db.review;

exports.review = (req, res) => {
    if (req.method === 'POST') {
        if (!req.body.username && !req.body.comment) {
            res.status(400).send({ message: 'Incorrect data' });
            return;
        }
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
    if (req.method === 'GET') {
        Review.find({}).exec((err, reviews) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send(reviews);
        });
    }
};
