/* eslint-disable @typescript-eslint/no-var-requires */
const controller = require('../controllers/review.controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.get('/api/review', controller.review);

    app.post('/api/review', controller.review);
};
