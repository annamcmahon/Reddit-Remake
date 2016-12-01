profileActivityModule.controller('profileActivityController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.radioModel = 'saved';
	vm.savedPosts = SharedService.getSavedPosts();
	vm.myPosts = SharedService.getUserPosts("anna");

	vm.subreddits = SharedService.getSubreddits("anna") ;

	vm.toggleDown = function(item) {
			item.downArrow = !item.downArrow;
	};

	vm.toggleUp = function(item) {
		item.upArrow = !item.upArrow;
	};


	vm.toggleFlag = function(item) {
		item.flag = !item.flag;
	};

	vm.toggleFav = function(item) {
		item.fav = !item.fav;
	};

	vm.toggleComment = function(item) {
		item.comment= !item.coment;
	};

	vm.toggleShare = function(item) {
		item.share = !item.share;
	};
}]);
