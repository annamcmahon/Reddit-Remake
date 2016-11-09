profileActivityModule.controller('profileActivityController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
  vm.radioModel = 'saved';
  vm.data = [{postTitle: "Another irrelevant post", source:"source1", pic:"http://i.imgur.com/A8eQsll.jpg", votes: 9,downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Another irrelevant post", source:"source2", votes: 7,downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false},{postTitle: "Another irrelevant post", source:"source3", votes: 6,downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false,pic:"http://i.imgur.com/xtoLyW2.jpg"},{postTitle: "Another irrelevant post", source:"source4", votes:3,downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false}];
  vm.subreddits = ["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"];

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
