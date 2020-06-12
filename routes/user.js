const router = require('express').Router();

const {signup} = require('../controllers/user.js')

router.post("/signup", signup);

module.exports = router;
