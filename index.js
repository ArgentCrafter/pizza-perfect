const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// add your routes here...
app.get('/', function(req, res) {
	res.render('index')
});

app.get('/pizzas', function(req, res) {

});

app.get('/pizza/add', function(req, res) {

});

app.post('/pizza/add/', function(req, res) {

});

app.get('/pizza/edit/:pizza_id', function(req, res) {

});

app.post('/pizza/edit', function(req, res) {

});

const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});