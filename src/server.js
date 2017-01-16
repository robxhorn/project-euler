var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var Puzzle1 = require('./puzzle1/puzzle1');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function (req, res, next) {
   console.log('received request: ' + req.method + ':' + req.path);
   next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Hooray, everything seems to work' });
});

router.route('/puzzle1/:maxNumber')
    .get(function(req,res){
        var puzzle1 = new Puzzle1();
        var result = puzzle1.sumAllIfDivisibleBy3or5UpTo(req.params.maxNumber);
        res.json({ message: 'Puzzle 1 solution is: ' + result});
    });

app.use('/puzzles', router);

app.listen(port);
console.log('Listening on port ' + port);