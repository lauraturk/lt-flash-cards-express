const request = require('request')
const API_KEY = require('./key')
const BASE_URL = `https://translation.googleapis.com/language/translate/v2`


function getTranslations(req, res, next) {
  request({
    url: BASE_URL + API_KEY.google,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({q: req.body.q, target:req.body.target})
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function getLanguages(req, res, next) {
  request({
    url: `${BASE_URL}/languages/${API_KEY.google}`,
    // method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    } else {
      console.log(error)
    }
  })
}

function getDefinitions(req, res, next) {
  console.log(req)
  request({
    url: `https://od-api.oxforddictionaries.com/api/v1/entries/es/${req.body}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'app_id': API_KEY.oedApp_id,
      'app_key': API_KEY.oedApp_key
    }
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getLanguages: getLanguages,
  getTranslations: getTranslations,
  getDefinitions: getDefinitions
};
