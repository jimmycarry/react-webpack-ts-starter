var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res, next) {
    if (req.url.split('/')[1] == 'api') {
      next();
    } else if (req.url.split('/')[1] == 'external') {
      res.sendFile(path.join(__dirname,  req.url));
    } else {
      console.log(req.url);
      console.log(path.join(__dirname, './index.html'));
      res.sendFile(path.join(__dirname, './index.html'));
    }
})

module.exports = router;