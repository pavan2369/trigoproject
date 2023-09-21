const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const ctrlLocations =
  require('../controllers/locations');
const ctrlothers = require('../controllers/others');
/* GET home page. */
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);
=======
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);
>>>>>>> cb21562b1735c744c8d336a6291c7e400c4a8095

module.exports = router;