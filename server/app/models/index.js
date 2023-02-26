/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.reservation = require('./reservation.model');
db.review = require('./review.model');

module.exports = db;
