const request = require('request')
const API_KEY = require('./key')
const BASE_URL = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCub8nBhL-mM4JskZYecd7oF5h3vmoUJ4Y`


function getLanguages(req, res, next) {
  request({
    url: BASE_URL,
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

module.exports = {
  getLanguages: getLanguages
};
