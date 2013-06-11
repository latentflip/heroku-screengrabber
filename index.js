var webshot = require('webshot');
var express = require('express');

var app = express();

app.get('/shot.png', function(req, res) {
  webshot(req.query.url, function(err, renderStream) {
    renderStream.pipe(res);
  });
});

app.listen(process.env.PORT || 3000);
