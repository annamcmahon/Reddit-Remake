browseModule.controller('browseSubredditController', ['$scope', '$state', '$http','SharedService', 'Upload', function ($scope, $state, $http, SharedService, Upload) {
	var vm = this;
	vm.title = SharedService.getProperty();
	vm.subscribed = false;
	vm.data = [{postTitle: "Another irrelevant post", source:"source1", votes: 9},{postTitle: "Another irrelevant post", source:"source2", votes: 7},{postTitle: "Another irrelevant post", source:"source3", votes: 6},{postTitle: "Another irrelevant post", source:"source4", votes:3}];
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
	var x = {postTitle: vm.newPostTitle,source:"source5", votes: 0 };
	vm.data.push(x);
	vm.newPostTitle= '';
}

}]);
$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});
