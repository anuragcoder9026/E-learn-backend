const express = require('express');

const router = express.Router();

const isAuth = require('../middlewares/is-auth')

const classroomController = require('../controllers/resource');

router.post('/createResource', classroomController.createResource);
router.post('/getResources', isAuth, classroomController.getResources);
router.post('/getResource', classroomController.getResource);

module.exports = router; 