app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/browse');

	$stateProvider
	.state('browse', {
		url: '/browse',
		templateUrl: 'src/partials/browse/browse.html',
		controller: 'browseController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('discover', {
		url: '/discover',
		templateUrl: 'src/partials/discover/discover.html',
		controller: 'discoverController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'src/partials/login/login.html',
		controller: 'loginController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('profile-activity', {
		url: '/profile-activity',
		templateUrl: 'src/partials/profile-activity/profile-activity.html',
		controller: 'profileActivityController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('make-post', {
		url: '/make-post',
		templateUrl: 'src/partials/make-post/make-post.html',
		controller: 'makePostController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('view-post', {
		url: '/view-post',
		templateUrl: 'src/partials/view-post/view-post.html',
		controller: 'viewPostController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('subreddit', {
		url: '/browse-subreddit',
		templateUrl: 'src/partials/browse-subreddit/browse-subreddit.html',
		controller: 'browseSubredditController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('profile', {
		url: '/profile',
		templateUrl: 'src/partials/profile/profile.html',
		controller: 'profileController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('browse-all', {
		url: '/browse-all',
		templateUrl: 'src/partials/browse/browse.html',
		controller: 'browseAllController',
		controllerAs: 'vm',
	})
	$stateProvider
	.state('comments', {
		url: '/comments',
		templateUrl: 'src/partials/comments/comments.html',
		controller: 'commentsController',
		controllerAs: 'vm',
	})
});
