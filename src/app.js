var browseModule = angular.module('browse', []);
var loginModule = angular.module('login',[]);
// dependencies of app module in []
var app = angular.module('app', ['ui.router','browse', 'login']);
