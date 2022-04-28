const express = require('express');
const router = express.Router();
// NOTE: Add middleware to verify requests!
const middleware = require('../middlewares');

var auth = require('../controllers/auth.controller.js');

router.post('/logins', auth.verify);
router.post('/register', middleware.verify, auth.verifyregister);
router.post('/deleteuser', middleware.verify, auth.deleteUser);
router.post('/changeVideoState', middleware.verify, auth.changeVideoState);
router.post('/changeMusicState', middleware.verify, auth.changeMusicState);
router.post('/changeFoodState', middleware.verify, auth.changeFoodState);
router.post('/eachuser', middleware.verify, auth.eachuser);
router.post('/updateuser', middleware.verify, auth.updateUser);
router.get('/getusers' , middleware.verify, auth.getusers)

module.exports = router;