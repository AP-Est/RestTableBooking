/* eslint-disable @typescript-eslint/no-var-requires */
const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept Authorization, Cookie');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });

    app.post('/api/auth/signup', [verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);

    app.post('/api/auth/signin', controller.signin);

    app.post('/api/auth/signout', controller.signout);

    app.get('/api/auth/logstatus', controller.isLogged);
};
