require('bootstrap');
require('../less/main.less');
var hello = require('./sample/hello');

$('body').append('<br>' + hello.hello('Webpack'));
