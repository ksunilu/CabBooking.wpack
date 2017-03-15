'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('myApp', ['ngRoute']);

require('./controllers');

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/tariffs', {
    templateUrl: 'views/tariffs.html',
    controller: 'TariffsController'
  }).when('/tariffs2', {
    templateUrl: 'views/tariffs2.html',
    controller: 'TariffsController2'
  })

});
