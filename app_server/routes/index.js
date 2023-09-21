
const express = require('express');
const router = express.Router();
const ctrlLocations =
  require('../controllers/locations');
const ctrlothers = require('../controllers/others');
/* GET home page. */
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

router.get('/about',ctrlothers.about);
module.exports = router;