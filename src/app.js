var browseModule = angular.module('browse', []);
var loginModule = angular.module('login',[]);
var discoverModule = angular.module('discover',[]);
var makePostModule = angular.module('make-post',[]);
var commentsModule = angular.module('comments',[]);
var sharedService = angular.module('SharedService', []);
var profileActivityModule = angular.module('profileActivity', []);
// dependencies of app module in []
var app = angular.module('app', ['ui.router','ui.select','ngFileUpload','SharedService','ngSanitize','profileActivity','ui.bootstrap', 'browse', 'login', 'discover', 'make-post', 'comments']);
