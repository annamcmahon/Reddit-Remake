commentsModule.controller('commentsController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
	vm.toggleDown = function(item) {
		item.downArrow = !item.downArrow;
	};

	vm.toggleUp = function(item) {
		item.upArrow = !item.upArrow;
	};


	vm.toggleFlag = function(item) {
		item.flag = !item.flag;
	};

	vm.toggleFav = function(item) {
		item.fav = !item.fav;
	};

	vm.toggleShare = function(item) {
		item.share = !item.share;
	};
  vm.data = [{postTitle: "This is a really cool cat", source:"source1", votes: 9,downArrow: false, upArrow: false, share: false, flag: false, fav: false},{postTitle: "Looking good", source:"source2", votes: 7,downArrow: false, upArrow: false, share: false, flag: false, fav: false},{postTitle: "Hey! that is my cat", source:"source3", votes: 6},{postTitle: "Nice", source:"source4", votes:3,downArrow: false, upArrow: false, share: false, flag: false, fav: false}];

	$scope.disqusConfig = {
    		disqus_shortname: 'reddit-remake',
    		disqus_identifier: '1',
    		disqus_url: 'http://katiemquinn.com/test' // this is a way to force load of disqus, you have to set a trusted domain and it cannot be localhost
	};

}]);
