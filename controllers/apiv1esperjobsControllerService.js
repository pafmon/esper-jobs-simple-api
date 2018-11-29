'use strict'

var request = require('request');
var request = require('request');

module.exports.addEsperjob = function addEsperjob(req, res, next) {
  var job = req["esper-job"].value;

  request.post(
    'http://esper-epl-tryout.appspot.com/api/tryoutform',
    { json: job },
    function (error, response, body) {

      if (!error && response.statusCode == 200) {
        console.log(body)
        res.send(body);
      } else {
        res.sendStatus(400);
      }
    }
  );

};