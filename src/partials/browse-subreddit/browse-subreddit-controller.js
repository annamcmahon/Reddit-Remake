browseModule.controller('browseSubredditController', ['$scope', '$state', '$http','SharedService', 'Upload','SharedService', function ($scope, $state, $http, SharedService, Upload, SharedService) {
	var vm = this;
	vm.title = SharedService.getProperty();
	vm.subscribed = false;
	vm.data = SharedService.getPosts(SharedService.getProperty());
	vm.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: ''
  };
	vm.uploadFiles = function(file, errFiles) {
			$scope.f = file;
			$scope.errFile = errFiles && errFiles[0];
			if (file) {
					file.upload = Upload.upload({
							url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
							data: {file: file}
					});

					file.upload.then(function (response) {
							$timeout(function () {
									file.result = response.data;
							});
					}, function (response) {
							if (response.status > 0)
									$scope.errorMsg = response.status + ': ' + response.data;
					}, function (evt) {
							file.progress = Math.min(100, parseInt(100.0 *
																			 evt.loaded / evt.total));
					});
			}
	}
vm.closePopover = function(){
  vm.isOpen = false;
}
vm.postData = function(){

	var x = {subreddit: vm.title , postTitle: vm.newPostTitle, source:"source1", votes: 0, pic:"",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"};
	SharedService.addPost(x);
	vm.newPostTitle= '';
	vm.data = SharedService.getPosts("/r/cats");
}

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


}]);
$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});
