/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const Reservation = mongoose.model(
    'Reservation',
    new mongoose.Schema({
        tableId: String,
        startAt: String,
        endAt: String,
        userPhone: String,
    })
);

module.exports = Reservation;
