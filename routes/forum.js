const express = require('express');

const router = express.Router();

const isAuth = require('../middlewares/is-auth')

const classroomController = require('../controllers/forum');


router.post('/createDiscussion', classroomController.createDiscussion);
router.post('/getDiscussions', classroomController.getDiscussions);

module.exports = router; 