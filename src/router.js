var express = require('express');
var router = express.Router();
var controller = require('./controller');

  router.get('/languages', controller.getLanguages)

module.exports = router;
