var app = require('angular').module('myApp');

app.controller('MainController', require('./MainController'));
app.controller('TariffsController', require('./tariffsController'));


app.service('crud',  require('./crud'));

app.controller('TariffsController2', require('./tariffsController2'));

