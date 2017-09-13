var mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  var port =  process.env.PORT || 8080;
  app.listen(process.env.port, function() {
    console.log('App listening on port', port);
  });
};