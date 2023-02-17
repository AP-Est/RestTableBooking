/* eslint-disable @typescript-eslint/no-var-requires */
const controller = require('../controllers/user.controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept Authorization, Cookie');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });

    app.get('/api/user/:id', controller.getUser);
};
