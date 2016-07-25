var express = require('express');


var app = express();


//middle ware static files first thing
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
  res.send('hello world');
});
var port = process.env.PORT || 5000;
app.listen(5000, function(err){
  console.log('running server on port ' + port);

});
