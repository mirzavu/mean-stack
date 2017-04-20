var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = process.env.PORT || 8080;
var app = express();

process.env.PWD = process.cwd();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set Static folder
console.log(process.env.PWD)
app.use(express.static(path.join(__dirname, 'client'), { maxAge: 86400000 }));
app.use(express.static(path.join(__dirname, '../client/src'), { maxAge: 86400000 }));

// Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
	console.log('Server started on port'+ port);
});

