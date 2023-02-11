/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../models/index');
const moment = require('moment');
const Reservation = db.reservation;

const checkTableIsAvailable = (req, res, next) => {
    Reservation.find({
        tableId: req.body.tableId,
    }).exec((err, tablesInfo) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        const timeIsBusy = tablesInfo.some(
            (table) =>
                moment(req.body.startAt).isBetween(table.startAt, table.endAt) ||
                moment(req.body.endAt).isBetween(table.startAt, table.endAt)
        );

        if (timeIsBusy) {
            res.status(400).send({ message: 'This time already booked. Please, check available tables' });
            return;
        }
        next();
    });
};

const verifyReservation = {
    checkTableIsAvailable,
};

module.exports = verifyReservation;
