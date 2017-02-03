var path = require('path');
var cors = require('cors')
var express = require('express');
var app = express();
app.use(cors());

app.use('/', express.static(path.join(__dirname)));


// Used for App health checking
app.get('/sys/info/ping', function(req, res) {
  res.end('"OK"');
});

app.listen(3000, function () {
})