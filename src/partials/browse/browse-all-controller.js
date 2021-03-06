browseModule.controller('browseAllController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.title = "All";
  vm.style = "";
	vm.detail ={};

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

	vm.toggleComment = function(item) {
		item.comment= !item.coment;
	};

	vm.toggleShare = function(item) {
		item.share = !item.share;
	};
/*	vm.setDetail = function(p){
		vm.detail= p;

	}*/

  	vm.setDetail = function(p){
                vm.detail= p;
                vm.selectedPost = p.id;

                // TODO: fix issue where comments are the same
                $scope.disqusConfig = {
                        disqus_shortname: 'reddit-remake',
                        disqus_identifier: p.postTitle,
                        disqus_url: 'http://katiemquinn.com/' + p.postTitle // TODO: add an id here
                };
                console.log($scope.disqusConfig);
        };

        vm.init = function(){
                // this may fail without a promise, very hacky
                vm.setDetail(vm.data[0]);
                $scope.disqusConfig = {
                        disqus_shortname: 'reddit-remake',
                        disqus_identifier: '0',
                        disqus_url: 'http://katiemquinn.com/' + 0
                };
        };
	vm.data = [{postTitle: "Happy Monday", source:"imgur", votes: 9, pic:"http://i.imgur.com/R0CNlPY.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "What's next?", source:"cnn", votes: 7,pic:"http://i.imgur.com/2WWJ5af.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "A look into the future", source:"imgur", votes: 6, pic:"http://i.imgur.com/5jLWFZZ.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Lazy Day", source:"aww", votes:3,pic:"http://i.imgur.com/ySbhL8E.png",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false}];
	var init = function(){
		// set the data on the detail
	}
}]);
