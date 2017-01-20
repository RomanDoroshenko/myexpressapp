const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    owner: 'RomanD',
    pageTitle: 'expressjsIndex'
  });
});


module.exports = router;
