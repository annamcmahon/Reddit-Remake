browseModule.controller('browseController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
	var vm = this;
	vm.data = [{postTitle: "Title1", source:"source1", votes: 9},{postTitle: "Title2", source:"source2", votes: 7},{postTitle: "Title3", source:"source3", votes: 6},{postTitle: "Title4", source:"source4", votes:3}];
}]);
