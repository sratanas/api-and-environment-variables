var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

// Serve back static files by default
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});
