/* eslint-disable @typescript-eslint/no-var-requires */
const authJwt = require('./authJwt');
const verifySignUp = require('./verifySingUp');
const verifyReservation = require('./verifyReservation');

module.exports = {
    authJwt,
    verifySignUp,
    verifyReservation,
};
