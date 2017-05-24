var express = require('express');
var router = express.Router();
var controller = require('./controller');

  router.get('/languages', controller.getLanguages)
  router.post('/languages', controller.getTranslations)
  router.put('/definitions', controller.getDefinitions)

module.exports = router;
