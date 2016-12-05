discoverModule.controller('discoverController', ['$scope', '$state', '$http', 'SharedService', function ($scope, $state, $http, SharedService) {
	var vm = this;
	console.log(SharedService.getProperty());
  vm.radioModel = 'suggested';
	vm.subreddits = ["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"];
	vm.mysubs = SharedService.getSubreddits();
	vm.friendsData = [{reddit: "cat", description:"Adam"},{reddit: "cat", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.suggestedData= [{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.popularData=[{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"},{reddit: "dogs", description:"good"}];
	vm.data = {suggested: vm.suggestedData,friends:vm.friendsData, popular:vm.popularData };
	vm.subscribed = {cat:false, dog:true};
	vm.filter = "";

	vm.similarSubreddits = {
		"/r/cats":["/r/extremesports", "/r/food", "/r/interview"],
		"/r/dogs":["/r/cats", "/r/dogs", "/r/tech"],
		"/r/tech":["/r/extremesports", "/r/food", "/r/interview"],
		"/r/sports":["/r/extremesports", "/r/food", "/r/interview"],
		"/r/cs":["/r/extremesports", "/r/food", "/r/interview"],
		"/r/extremesports":["/r/cats", "/r/dogs", "/r/tech"],
		"/r/food":["/r/cats", "/r/dogs", "/r/tech"],
		"/r/interview":["/r/cats", "/r/dogs", "/r/tech"],
		"/r/movies":["/r/cats", "/r/dogs", "/r/tech"]
	};
	vm.subredditSelected = function(c){
		SharedService.setCurrentFeed(c);
		SharedService.setDiscovering(false);
		$state.go("browse");
	}
	vm.isSubscribed =function(c){
		return vm.mysubs.includes(c);
	}
	vm.subscribe =function(c){
		SharedService.followSubreddit(c);
		vm.mysubs = SharedService.getSubreddits();
	}
	vm.unsubscribe = function(c){
		SharedService.unfollowSubreddit(c);
		vm.mysubs = SharedService.getSubreddits();
	}
	vm.person = {};
	vm.peopleObj =
	{
		'Adam': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Amalie': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Estefanía': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Adrian': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Wladimir': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Samantha': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Nicole': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Natasha': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Michael': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
		'Nicolás': {front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	};

//vm.person.selected = vm.person.selectedValue;
//vm.person.selected = "all";
//vm.suggested.selected = "all";
vm.people = [
	{ name: 'Adam',      email: 'adam@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Amalie',    email: 'amalie@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Estefanía', email: 'estefania@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"] },
	{ name: 'Adrian',    email: 'adrian@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Wladimir',  email: 'wladimir@email.com',front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Samantha',  email: 'samantha@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Nicole',    email: 'nicole@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Natasha',   email: 'natasha@email.com',front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Michael',   email: 'michael@email.com',front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]},
	{ name: 'Nicolás',   email: 'nicolas@email.com', front:["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"]}
];

}]);
