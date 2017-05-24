var express = require('express');
var router = express.Router();
var controller = require('./controller');

  router.get('/languages', controller.getLanguages)
  router.post('/languages', controller.getTranslations)

module.exports = router;
