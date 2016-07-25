var express = require('express');


var app = express();


//middle ware static files first thing
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {title: 'hello from render', list:['a', 'b']});
});
var port = process.env.PORT || 5000;
app.listen(5000, function(err){
  console.log('running server on port ' + port);

});
