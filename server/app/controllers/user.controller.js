/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../models');
const User = db.user;

exports.getUser = (req, res) => {

    User.findOne({_id: req.params.id}).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if(!user) {
            return res.status(404).send({ message: 'User Not found.' });
        }
        
        res.status(200).send(user);
    });
   
};
