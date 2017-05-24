var express = require('express');
var router = express.Router();
var controller = require('./controller');

  router.get('/languages', controller.getLanguages)
  router.post('/languages', controller.getLanguages)

module.exports = router;
