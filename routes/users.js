var express = require('express');
var router = express.Router();
var controller = require('../Controller/userController')

/* GET users listing. */
router.post('/hello', controller.helloWorld);

module.exports = router;
