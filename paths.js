"use strict";
var fs = require('fs');
var url = require('url');
var path = require('path');


const appDirectory = fs.realpathSync(process.cwd());
console.log(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
    appHtml: resolveApp('external/index.html'),
    appIndexJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src')
  };
