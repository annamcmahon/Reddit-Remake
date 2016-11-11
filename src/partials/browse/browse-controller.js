browseModule.controller('browseController', ['$scope', '$state', '$http','SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
	vm.title = "Front";

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

	vm.data = [
	{postTitle: "Just got my senior pics back", source:"source1", votes: 9, pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "And you think you had a rough day", source:"imgur", votes: 7, pic:"https://i.redd.it/qi9qollfydwx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "Adopt today!", source:"spca.com", votes: 6, pic:"http://i.imgur.com/uloykHU.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "Oh deer", source:"source4", votes:3,pic:"http://i.imgur.com/UbhuYRv.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "Just got my senior pics back", source:"source1", votes: 9, pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "And you think you had a rough day", source:"imgur", votes: 7, pic:"https://i.redd.it/qi9qollfydwx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "Adopt today!", source:"spca.com", votes: 6, pic:"http://i.imgur.com/uloykHU.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},
	{postTitle: "Oh deer", source:"source4", votes:3,pic:"http://i.imgur.com/UbhuYRv.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false}
];
}]);
$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});
