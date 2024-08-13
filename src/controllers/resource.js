const ObjectId = require('mongoose').Types.ObjectId; 
const resource = require('../models/resource');
const User = require('../models/user');

exports.createResource = (req, res, next) => {
    // console.log(req.body); let currClassCode;
    const name = req.body.name;
    const desc = req.body.desc;
    const fieldName = req.body.fieldName;
    const dueDate = req.body.dueDate;
    const fileLink = req.body.fileLink;
    const creatorEmail = req.body.creatorEmail;

    const assignment = new resource({
        name: name,
        desc: desc,
        fieldName: fieldName,
        fileLink: fileLink,
        creatorEmail: creatorEmail
    })

    assignment.save()
        .then(result => {
            res.json({message: "Resource created successfully"});
        })
        .catch(err => {
            next(err);
        })
}

exports.getResources = (req, res, next) => {
    resource.find()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            next(err);
        })
}

exports.getResource = (req, res, next) => {
    const assignmentId = req.body.assignmentId;
    resource.findById(assignmentId)
        .then(assignment => {
            User.findOne({email: assignment.creatorEmail})
                .then(user => {
                    res.json({...assignment._doc, creatorName: user.name});
                })
                .catch(err => {
                    next(err);
                })
        })
        .catch(err => {
            next(err);
        })
}