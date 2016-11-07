profileActivityModule.controller('profileActivityController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.radioModel = 'saved';
  vm.data = [{postTitle: "Another irrelevant post", source:"source1", votes: 9},{postTitle: "Another irrelevant post", source:"source2", votes: 7},{postTitle: "Another irrelevant post", source:"source3", votes: 6},{postTitle: "Another irrelevant post", source:"source4", votes:3}];
  vm.subreddits = ["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"];

}]);
