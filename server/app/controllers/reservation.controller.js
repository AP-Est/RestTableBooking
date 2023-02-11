/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../models');
const Reservation = db.reservation;

exports.reserve = (req, res) => {
    const reservation = new Reservation({
        tableId: req.body.tableId,
        startAt: req.body.startAt,
        endAt: req.body.endAt,
        userPhone: req.body.userPhone,
    });
    reservation.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    });

    res.send({ reservation });
};
