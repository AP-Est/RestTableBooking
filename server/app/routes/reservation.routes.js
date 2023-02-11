/* eslint-disable @typescript-eslint/no-var-requires */
const { verifyReservation } = require('../middlewares');
const controller = require('../controllers/reservation.controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.post('/api/reserve', [verifyReservation.checkTableIsAvailable], controller.reserve);
};
