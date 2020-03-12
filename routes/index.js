var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/mi/dataFeed', function(req, res) {
    var headers = JSON.stringify(req.headers);
    var body = JSON.stringify(req.body);
    const dateTime = Date.now();
    var time = (new Date(dateTime).toISOString().replace(/T/, ' ').replace(/\..+/, ''));
    res.send(200);
    fs.appendFile('test.txt',time+" headers:"+headers +"body:"+body +"\n" , function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
    });
});

module.exports = router;
