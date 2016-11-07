makePostModule.controller('makePostController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
	var vm = this;
	var data = ["dogs","cats"]; // subreddits to check on form submission
	vm.data = '';

	$scope.checkSub = function(){

		vm.data = ''; 

		var subreddit = String($scope.subreddit);

		var alert = true;
		// check against data array
		for (var i = 0; i < data.length; i++){
				console.log(data[i]);
				if(data[i] == subreddit){
					alert = false;		
				}
					
		}

		// want to check against all subreddits stored
		// clear out all of the input fields

		if(alert === true & subreddit != ''){
			if(subreddit !== "undefined"){
			// display a message below the submit button here
				vm.data = 'A new subreddit will be created for '+ subreddit + '.'; 				
			}
		}

		//clear out fields after pressing submit
		$scope.subreddit = '';
		$scope.sourceUrl = '';
		$scope.imageUrl = '';
		$scope.textContent = '';
		$scope.titleContent = '';

	};

}]);