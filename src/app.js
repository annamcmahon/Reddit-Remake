var browseModule = angular.module('browse', []);
var loginModule = angular.module('login',[]);
var discoverModule = angular.module('discover',[]);
var makePostModule = angular.module('make-post',[]);
var sharedService= angular.module('SharedService', []);

// dependencies of app module in []
var app = angular.module('app', ['ui.router','ui.select','SharedService','ngSanitize','ui.bootstrap', 'browse', 'login', 'discover', 'make-post']);
