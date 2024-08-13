const ObjectId = require('mongoose').Types.ObjectId; 
const Browse = require('../models/browse');

exports.getBrowse = (req, res, next) => {
    Browse.find()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            next(err);
        })
}

