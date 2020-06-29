var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req, res) => {
  res.send({ 'message': 'Welcome to Node world', name: 'Mohinesh' });
});

module.exports = router;
