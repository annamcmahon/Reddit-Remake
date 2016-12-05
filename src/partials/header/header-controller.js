browseModule.controller('headerController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.selectedTopItem = "browse";
  //vm.userName = SharedService.getUser() || '';
	vm.subreddits = SharedService.getSubreddits("anna") ;
  vm.select = function(selected){
    vm.selectedTopItem = selected;
  }
	vm.logout = function () {
	}
	vm.subredditSelected = function(c){
		SharedService.setCurrentFeed(c);
		$state.go("browse");
	}
}]);
