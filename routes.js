var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function (req, res, next) {
    if (req.url.split('/')[1] == 'api') {
        next();
        // 外部依赖
    } else if (req.url.split('/')[1] == 'external') {
        res.sendFile(path.join(__dirname, req.url));
    // 重新定向
    } else {
        console.log('webpack dev server restart');
        res.sendFile(path.join(__dirname, './index.html'));
    }
});

module.exports = router;
