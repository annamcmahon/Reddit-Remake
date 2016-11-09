commentsModule.controller('commentsController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.data = [{postTitle: "This is a really cool cat", source:"source1", votes: 9},{postTitle: "Looking good", source:"source2", votes: 7},{postTitle: "Hey! that is my cat", source:"source3", votes: 6},{postTitle: "Nice", source:"source4", votes:3}];
}]);
