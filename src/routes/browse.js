const express = require('express');

const router = express.Router();

const browseController = require('../controllers/browse');
router.post('/getBrowse', browseController.getBrowse);

module.exports = router; 