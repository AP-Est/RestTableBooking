/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        userPhone: req.body.userPhone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: 'User was registered successfully!' });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: 'User Not found.' });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({ message: 'Invalid Password!' });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: "24h",
        });

        res.cookie('access_token', token, {
            httpOnly: true,
            maxAge: 86400000,
        })
            .status(200)
            .send({
                id: user._id,
                username: user.username,
                userPhone: user.userPhone,
                email: user.email,
            });
    });
};

exports.signout = async (req, res) => {
    try {
        return res.clearCookie('access_token').status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        this.next(err);
    }
};

exports.isLogged = (req, res) => {
    if (req.cookies.access_token) {
        const token = req.cookies.access_token;
        const data = jwt.verify(token, config.secret);
        res.status(200).send({ message: 'User already loggined', userId: data.id });
        return;
    }

    res.status(401).send({ message: 'no logged' });
};
