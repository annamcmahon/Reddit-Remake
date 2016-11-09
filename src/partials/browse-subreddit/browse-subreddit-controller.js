browseModule.controller('browseSubredditController', ['$scope', '$state', '$http','SharedService', 'Upload', function ($scope, $state, $http, SharedService, Upload) {
	var vm = this;
	vm.title = SharedService.getProperty();
	vm.subscribed = false;
	vm.data = [{postTitle: "It's pay day", source:"source1", votes: 9,pic:"http://i.imgur.com/4AiXzf8.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Another irrelevant post", source:"source2", votes: 7,pic:"http://i.imgur.com/lVlPvCB.gif",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Another irrelevant post", source:"source3", votes: 6,pic:"http://i.imgur.com/6tqUuOw.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Just got my senior pics back", source:"source4", votes:3,pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false}];
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


	