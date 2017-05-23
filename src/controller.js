const request = require('request')
const API_KEY = require('./key')
const BASE_URL = `https://translation.googleapis.com/language/translate/v2/languages&key=${API_KEY}`


function getLanguages(req, res, next) {
  // console.log(BASE_URL)
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getLanguages: getLanguages
};
