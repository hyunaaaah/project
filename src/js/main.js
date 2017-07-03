require('bootstrap');
var hello = require('./sample/hello');

$('body').append('<br>' + hello.hello('Webpack'));
