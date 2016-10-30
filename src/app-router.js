app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/browse');

	$stateProvider
	.state('browse', {
		url: '/browse',
		templateUrl: 'partials/browse/browse.html',
		controller: 'browseController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('discover', {
		url: '/discover',
		templateUrl: 'partials/discover/discover.html',
		controller: 'discoverController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'partials/login/login.html',
		controller: 'loginController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('profile-activity', {
		url: '/profile-activity',
		templateUrl: 'partials/profile-activity/profile-activity.html',
		controller: 'profileActivityController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('make-post', {
		url: '/make-post',
		templateUrl: 'partials/make-post/make-post.html',
		controller: 'makePostController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('view-post', {
		url: '/view-post',
		templateUrl: 'partials/view-post/view-post.html',
		controller: 'viewPostController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('subreddit', {
		url: '/subreddit',
		templateUrl: 'partials/subreddit/subreddit.html',
		controller: 'subredditController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('profile', {
		url: '/profile',
		templateUrl: 'partials/profile/profile.html',
		controller: 'profileController',
		controllerAs: 'vm',
	})
});
