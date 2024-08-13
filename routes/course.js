const express = require('express');

const router = express.Router();

const isAuth = require('../middlewares/is-auth')

const classroomController = require('../controllers/courses');

router.post('/createCourse', classroomController.createCourse);
router.post('/getCourses', isAuth, classroomController.getCourses);
router.post('/joinCourse', classroomController.joinCourse);
router.post('/getCourse', classroomController.getCourse);
router.delete('/deleteCourse', classroomController.deleteCourse);
router.post('/createAssignment', classroomController.createAssignment);
router.post('/getAssignments', classroomController.getAssignments);
router.post('/getAssignment', classroomController.getAssignment);
router.post('/getReminders', classroomController.getReminders);
router.post('/submitAssignment', classroomController.submitAssignment);
router.post('/getSubmission', classroomController.getSubmission);
router.delete('/deleteSubmission', classroomController.deleteSubmission);
router.post('/getSubmissions', classroomController.getSubmissions);
router.post('/createContent', classroomController.createContent);
router.post('/getContents', classroomController.getContents);
router.post('/setGrade', classroomController.setGrade);


module.exports = router; 