const express = require('express');
const viewsController = require('../controllers/viewsController');
const router = express.Router();
// PUG ROUTES

router.get('/', viewsController.getOverview);
router.get('/Tour', viewsController.getTour);

module.exports = router;
