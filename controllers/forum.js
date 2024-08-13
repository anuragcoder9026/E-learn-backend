const ObjectId = require('mongoose').Types.ObjectId; 
const forum = require('../models/forum');
const User = require('../models/user');


exports.createDiscussion = (req, res, next) => {
    const creatorName = req.body.creatorName;
    const creatorEmail = req.body.creatorEmail;
    const imgLink = req.body.imgLink;
    const desc = req.body.desc;

    const discussion = new forum({
        creatorEmail: creatorEmail,
        creatorName: creatorName,
        imgLink: imgLink,
        desc: desc
    })
    
    discussion.save()
        .then(result => {
            res.json({message: "Forum created successfully"});
        })
        .catch(err => {
            next(err);
        })
}

exports.getDiscussions = (req, res, next) => {
    forum.find()
        .then(discussions => {
            res.json(discussions);
        })
        .catch(err => {
            next(err);
        })
}