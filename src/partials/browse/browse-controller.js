browseModule.controller('browseController', ['$scope', '$state', '$http','Upload','SharedService', function ($scope, $state, $http, Upload, SharedService) {
	var vm = this;
	vm.title = "Front";
	vm.makePost= false;
	vm.selectedSortField="";
	vm.sortFields =["new","trending","top"];
	vm.currentPost={};

	vm.data = SharedService.getCurrentPosts();
	$scope.$on('feedChanged', function(event, x) {
		vm.data= x;
		vm.setDetailZero();
	});
	$scope.$on('makePost', function(event, x) {
		vm.makePost= x;
	});
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

	vm.uploadFiles = function(file, errFiles) {
			$scope.f = file;
			$scope.errFile = errFiles && errFiles[0];
			if (file) {
					file.upload = Upload.upload({
							url: 'uploads/'+file.name,
							data: {file: file}
					});

					file.upload.then(function (response) {
							file.result = response.data;
							vm.currentPost.pic= 'uploads/';
					}, function (response) {
							if (response.status > 0)
									$scope.errorMsg = response.status + ': ' + response.data;
					}, function (evt) {
							file.progress = Math.min(100, parseInt(100.0 *
																			 evt.loaded / evt.total));
					});
			}
	}
	vm.dynamicPopover = {
		content: 'Hello, World!',
		templateUrl: 'myPopoverTemplate.html',
		title: ''
	};
vm.closePopover = function(){
	vm.isOpen = false;
}
vm.postData = function(){
	var x = {subreddit: vm.title , postTitle: vm.currentPost.title , date:new Date() ,source:"source1", votes: 0, pic:vm.currentPost.pic,downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"};
	SharedService.addPost(x);
	vm.currentPost= {};
	vm.data = SharedService.getAllPosts();
}
vm.clearPostData=function(){
	vm.currentPost= {};
}
vm.star=function(){
	vm.detail.saved= !vm.detail.saved;
	SharedService.setSaved(vm.detail.id);
}
vm.flag=function(){
	vm.detail.flagged= !vm.detail.flagged;
	SharedService.setFlagged(vm.detail.id);
}
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
vm.setDetailZero = function(p){
	vm.detail= vm.data[0];
	vm.selectedPost = 0;
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
		vm.data = SharedService.getAllPosts();
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
