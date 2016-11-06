browseModule.controller('browseController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
	var vm = this;
	vm.data = [{postTitle: "Title1", source:"source1", votes: 5},{postTitle: "Title2", source:"source2", votes: 4},{postTitle: "Title3", source:"source3", votes: 3},{postTitle: "Title4", source:"source4", votes:1}];
}]);
