var browseModule = angular.module('browse', []);
var loginModule = angular.module('login',[]);
var discoverModule = angular.module('discover',[]);
var makePostModule = angular.module('make-post',[]);

// dependencies of app module in []
var app = angular.module('app', ['ui.router','ui.bootstrap', 'browse', 'login', 'discover','make-post']);
