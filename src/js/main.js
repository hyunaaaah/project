require('bootstrap');
require('../less/main.less');
var hello = require('./sample/hello');

$('footer').before('<br>' + hello.hello('Webpack!'));
