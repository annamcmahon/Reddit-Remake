browseModule.controller('headerController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.selectedTopItem = "browse";
	vm.currentFeed = SharedService.getCurrentFeed();
	vm.followsCurrentFeed = true;
  //vm.userName = SharedService.getUser() || '';
	vm.subreddits = SharedService.getSubreddits("anna") ;
	vm.followSubreddit = function(){
		vm.followsCurrentFeed=true;
		SharedService.followSubreddit(vm.currentFeed);
	}
	vm.selectDiscover= function(){
		SharedService.setCurrentFeed("Discover");
		vm.subreddits.selected = undefined;
		vm.currentFeed = "Discover";
		vm.selectedTopItem = "discover";
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
		vm.selectedTopItem ="";
		$state.go("browse", {}, {reload: true});
	}
	vm.isBrowse= function(){
		if(vm.currentFeed == "Discover" ||vm.currentFeed == "My Saved Posts" || vm.currentFeed == "My Posts"){
			return false;
		}
		return true;
	}
	vm.activitySubredditSelected= function(){
		//broadcast and filter
	}
	vm.mySaved2 = function(){
		console.log("hey")
		vm.subreddits.selected = undefined;
		$state.go("browse", {}, {reload: true});
		vm.data = [];
		//SharedService.setCurrentFeed("My Posts");
		// vm.subreddits.selected = undefined;
		// vm.currentFeed = "My Posts";
	}
	vm.mySavedSelected = function(){
		SharedService.setCurrentFeed("My Saved Posts");
		vm.subreddits.selected = undefined;
		vm.currentFeed = "My Saved Posts";
		$state.go("browse", {}, {reload: true});
	}
	vm.myPostsSelected= function(){
		SharedService.setCurrentFeed("My Posts");
		vm.subreddits.selected = undefined;
		vm.currentFeed = "My Posts";
		$state.go("browse", {}, {reload: true});
	}
	vm.makePost = function(){
		SharedService.setMakePost();
	}
}]);
