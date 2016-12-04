headerModule.controller('headerController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.selectedTopItem = "browse";
  //vm.userName = SharedService.getUser() || '';
  vm.select = function(selected){
    vm.selectedTopItem = selected;
  }
	vm.logout = function () {
	}
}]);
