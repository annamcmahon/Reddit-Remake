browseModule.controller('headerController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.selectedTopItem = "browse";
	vm.currentFeed = "Front";
	vm.followsCurrentFeed = true;
  //vm.userName = SharedService.getUser() || '';
	vm.subreddits = SharedService.getSubreddits("anna") ;
	vm.followSubreddit = function(){
		vm.followsCurrentFeed=true;
		SharedService.followSubreddit(vm.currentFeed);
	}
  vm.select = function(selected){
    vm.selectedTopItem = selected;
  }
	vm.logout = function () {
	}
	$scope.$on('feedChanged', function(event, x) {
		vm.currentFeed = SharedService.getCurrentFeed();
		vm.followsCurrentFeed = SharedService.followsCurrentFeed();
	});
	vm.subredditSelected = function(c){
		SharedService.setCurrentFeed(c);
		vm.currentFeed = c;
		$state.go("browse");
	}
	vm.makePost = function(){
		SharedService.setMakePost();
	}
}]);
