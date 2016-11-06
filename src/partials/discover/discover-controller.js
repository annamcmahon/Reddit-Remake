discoverModule.controller('discoverController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
	var vm = this;
  vm.radioModel = 'suggested';
	vm.friendsData = [{reddit: "cat", description:"good"},{reddit: "cat", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.suggestedData= [{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.popularData=[{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.data = {suggested: vm.suggestedData,friends:vm.friendsData, popular:vm.popularData };
	vm.subscribed = {cat:false, dog:true};
	vm.filter = "";
}]);
