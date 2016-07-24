var express = require('express');


var app = express();


app.get('/', function(req, res){
  res.send('hello world');
});
var port = 5000;
app.listen(5000, function(err){
  console.log('running server on port ' + port);

});
