browseModule.controller('browseAllController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.title = "All";
  vm.style = "";
	vm.data = [{postTitle: "Just got my senior pics back", source:"source1", votes: 9},{postTitle: "Another irrelevant post", source:"source2", votes: 7},{postTitle: "Another irrelevant post", source:"source3", votes: 6},{postTitle: "Another irrelevant post", source:"source4", votes:3}];
}]);
