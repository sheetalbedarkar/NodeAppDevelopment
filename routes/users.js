var express = require('express');
var router = express.Router();
var controller = require('../Controller/userController')

/* GET users listing. */
router.get('/hello/:name', controller.helloWorld);

module.exports = router;
