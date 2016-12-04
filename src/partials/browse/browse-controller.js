browseModule.controller('browseController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
	vm.title = "Front";
	vm.makePost= false;
	vm.selectedSortField="";
	vm.sortFields =["new","trending","top"];

	vm.data = SharedService.getAllPosts();
	
	vm.toggleDown = function(item) {
		SharedService.downvotePost(item.id);
	};

	vm.toggleUp = function(item) {
		SharedService.upvotePost(item.id);
	};
	vm.sortPostsBy= function(item){
		console.log(item);
	};

	vm.toggleFlag = function(item) {
		SharedService.setFlagged(item.id);
	};

	vm.toggleFav = function(item) {
		SharedService.setSaved(item.id);
	};

	vm.toggleComment = function(item) {
		item.comment= !item.coment;
	};

	vm.toggleShare = function(item) {
		item.share = !item.share;
	};
	vm.setDetail = function(p){
		vm.detail= p;
		vm.selectedPost = p.id;
	
		// TODO: fix issue where comments are the same	
		$scope.disqusConfig = {
    			disqus_shortname: 'reddit-remake',
    			disqus_identifier: p.id,
    			disqus_url: 'http://katiemquinn.com/' + p.id
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

}]);
$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});
