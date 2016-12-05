browseModule.controller('headerController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.selectedTopItem = "browse";
	vm.currentFeed = "Front";
	vm.followsCurrentFeed = true;
	vm.browsing=true;
  //vm.userName = SharedService.getUser() || '';
	vm.subreddits = SharedService.getSubreddits("anna") ;
	vm.followSubreddit = function(){
		vm.followsCurrentFeed=true;
		SharedService.followSubreddit(vm.currentFeed);
	}
  vm.select = function(selected){
		vm.subreddits.selected = undefined;
		if(selected!=='browse'){
			vm.discovering=true;
		}
    vm.selectedTopItem = selected;
  }
	vm.logout = function () {
	}
	$scope.$on('feedChanged', function(event, x) {
		vm.currentFeed = SharedService.getCurrentFeed();
		vm.followsCurrentFeed = SharedService.followsCurrentFeed();
	});
	$scope.$on('discovering', function(event, x) {
		vm.discovering = x;
	});
	vm.setDiscovering= function(){
		vm.subreddits.selected = undefined;
		vm.discovering = true;
	}
	vm.subredditSelected = function(c){
		SharedService.setCurrentFeed(c);
		vm.currentFeed = c;
		vm.discovering = false;
		vm.selectedTopItem ="";
		$state.go("browse");
	}
	vm.activitySubredditSelected= function(){
		//broadcast and filter
	}
	vm.mySavedSelected = function(c){
		SharedService.setCurrentFeed("mysaved");
		vm.currentFeed = "My Saved Posts";
		vm.discovering = false;
		vm.profileActivity = true;
		$state.go("browse");
	}
	vm.myPostsSelected= function(){
		SharedService.setCurrentFeed("myposts");
		vm.currentFeed = "My Posts";
		vm.discovering = false;
		vm.profileActivity = true;
		$state.go("browse");
	}
	vm.makePost = function(){
		SharedService.setMakePost();
	}
}]);
