browseModule.controller('browseController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
	vm.title = "Front";
	vm.makePost= false;

	vm.toggleDown = function(item) {
		SharedService.downvotePost(item.id);
	};

	vm.toggleUp = function(item) {
		SharedService.upvotePost(item.id);
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
	}
	vm.data = SharedService.getAllPosts();

}]);
$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});
