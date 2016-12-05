sharedService.service('SharedService', function ($rootScope) {
        var property = 'Front';
        var subreddits = {};
        var mySubreddits = {};
        var friends = {};

        // have each array object hold id so that when filtered it still knows which post element it correspond to
        var posts = [
        {id:0, subreddit: "/r/cats", postTitle: "Just got my senior pics back", source:"source1", votes: 9, pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:1, subreddit: "/r/dogs", postTitle: "And you think you had a rough day", source:"imgur", votes: 7, pic:"https://i.redd.it/qi9qollfydwx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:2, subreddit: "/r/dogs", postTitle: "Adopt today!", source:"spca.com", votes: 6, pic:"http://i.imgur.com/uloykHU.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false,poster: "anna"},
        {id:3, subreddit: "/r/random", postTitle: "Oh deer", source:"source4", votes:3,pic:"http://i.imgur.com/UbhuYRv.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:4, subreddit: "/r/cats", postTitle: "Money cat", source:"source1", votes: 9, pic:"http://i.imgur.com/4AiXzf8.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false,poster: "anna"},
        {id:5, subreddit: "/r/cats", postTitle: "Hype for food", source:"imgur", votes: 7, pic:"http://i.imgur.com/6tqUuOw.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:6, subreddit: "/r/cats", postTitle: "lol", source:"spca.com", votes: 6, pic:"http://i.imgur.com/JOKsNeT.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:7, subreddit: "/r/cats", postTitle: "Wild cat", source:"source4", votes:3,pic:"http://i.imgur.com/mtbl1cr.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:8, subreddit: "/r/dogs", postTitle: "Happy Monday", source:"imgur", votes: 9, pic:"http://i.imgur.com/R0CNlPY.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:9, subreddit: "/r/random", postTitle: "What's next?", source:"cnn", votes: 7,pic:"http://i.imgur.com/2WWJ5af.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:10, subreddit: "/r/random", postTitle: "A look into the future", source:"imgur", votes: 6, pic:"http://i.imgur.com/5jLWFZZ.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:11, subreddit: "/r/dogs", postTitle: "Best friends", source:"aww", votes:3,pic:"http://i.imgur.com/MU2dD8E.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:12, subreddit: "/r/dogs", postTitle: "Out on the water", source:"imgur", votes:3, pic:"http://i.imgur.com/xtoLyW2.jpg", downArrow: false,upArrow: false, comment: false, flag: false, fav: false, poster: "katie"},
        {id:13, subreddit: "/r/dogs", postTitle: "My dog", source:"aww", votes:3,pic:"http://i.imgur.com/6xIgEx2.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:14, subreddit: "/r/dogs", postTitle: "Mad skills", source:"aww", votes:3,pic:"http://i.imgur.com/XgbZdeA.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:15, subreddit: "/r/dogs", postTitle: "Great Day", source:"aww", votes:3,pic:"http://i.imgur.com/nVrfTKj.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:16, subreddit: "/r/dogs", postTitle: "Snow day", source:"aww", votes:3,pic:"http://i.imgur.com/ADwncYQ.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:17, subreddit: "/r/cats", postTitle: "Lazy Day", source:"aww", votes:3,pic:"http://i.imgur.com/ySbhL8E.png",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:18, subreddit: "/r/dogs", postTitle: "Fun times!", source:"aww", votes:2,pic:"http://i.imgur.com/W8Xdy53.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:19, subreddit: "/r/dogs", postTitle: "Too cold", source:"imgur", votes:1,pic:"http://i.imgur.com/oDTcxdL.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:20, subreddit: "/r/dogs", postTitle: "So cute!!", source:"imgur", votes:1,pic:"http://i.imgur.com/sg1xCT2.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:21, subreddit: "/r/dogs", postTitle: "LOVE dogs", source:"imgur", votes:1,pic:"http://i.imgur.com/amuoyCn.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},

        {id:22, subreddit: "/r/dogs", postTitle: "Camping", source:"imgur", votes:1,pic:"http://i.imgur.com/6Cgww6M.jpg?1",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:23, subreddit: "/r/dogs", postTitle: "Brothers", source:"aww", votes:1,pic:"http://i.imgur.com/BOsrAP5.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:24, subreddit: "/r/dogs", postTitle: "My artist", source:"imgur", votes:0,pic:"http://i.imgur.com/hFei4AW.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:25, subreddit: "/r/cats", postTitle: "My cat got stuck in a vase", source:"imgur", votes:2,pic:"http://i.imgur.com/kwZFyk8.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},

        {id:26, subreddit: "/r/catss", postTitle: "Unexpected friends", source:"imgur", votes:1,pic:"http://i.imgur.com/amckVul.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:27, subreddit: "/r/cats", postTitle: "Halloween", source:"imgur", votes:1,pic:"http://i.imgur.com/agjj2s3.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:28, subreddit: "/r/cats", postTitle: "My cat!", source:"imgur", votes:1,pic:"http://i.imgur.com/hUS7a8m.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:29, subreddit: "/r/cats", postTitle: "Awww", source:"imgur", votes:1,pic:"http://i.imgur.com/R69WApe.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:30, subreddit: "/r/cats", postTitle: "so cute!!", source:"imgur", votes:1,pic:"http://i.imgur.com/hUB4ZoC.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:31, subreddit: "/r/cats", postTitle: "so young", source:"imgur", votes:0,pic:"http://i.imgur.com/eIGomYk.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:32, subreddit: "/r/cats", postTitle: "My cat's famous", source:"imgur", votes:0,pic:"http://i.imgur.com/5NrHPaJ.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:33, subreddit: "/r/cats", postTitle: "Best friend", source:"imgur", votes:0,pic:"http://i.imgur.com/7JzpTQF.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"}
	
	 ];
        var currentPosts= posts;
        var allSubreddits =["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"];
        var mySubreddits = ["/r/cats", "/r/dogs", "Front", "All"];
        var mySavedPosts = [1,5,7];
        var myPosts = [9];
        var myComments = [];
        var user = "anna";
        var currentFeed= "Front";

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            },
            getAllPosts: function() {
                return posts;
            },
            addPost: function(post) {
                post.id = posts.length;
                posts.push(post);
            },
            getPosts: function(subredditTitle){
              var result = posts.filter(function( post ) {
                return post.subreddit === subredditTitle;
              });
              return result;
            },
            getSavedPosts: function(){
              var result = posts.filter(function( post ) {
                return post.fav == true;
              });
              return result;
            },
            getUserPosts: function(user){
              var result = posts.filter(function( post ) {
                return post.poster == user;
              });
              return result;
            },
            setSaved: function(postId){
              posts[postId].fav = !posts[postId].fav;
            },
            setFlagged: function(postId){
              posts[postId].flag = !posts[postId].flag;
            },
            upvotePost: function(postId){
              if(!posts[postId].upArrow ){
                if(!posts[postId].downArrow){
                  posts[postId].votes ++;
                  posts[postId].upArrow = true;
                }else{
                  posts[postId].votes = posts[postId].votes+2;
                  posts[postId].upArrow = true;
                  posts[postId].downArrow = false;
                }
              }
            },
            downvotePost:function(postId){
              if(!posts[postId].downArrow ){
                if(!posts[postId].upArrow){
                  posts[postId].votes --;
                  posts[postId].downArrow = true;
                }else{
                  posts[postId].votes = posts[postId].votes-2;
                  posts[postId].upArrow = false;
                  posts[postId].downArrow = true;
                }
              }
            },
            followSubreddit(subreddit){
              mySubreddits.push(subreddit);
            },
            getSubreddits(user){ //TODO
              return mySubreddits;
            },
            getUser(){ //TODO
              return user;
            },
            setCurrentFeed(subreddit){
              currentFeed= subreddit;
              if(subreddit==='Front' || subreddit==='All'){
                currentPosts= posts;
              }
              else{
                var result = posts.filter(function( post ) {
                  return post.subreddit === subreddit;
                });
                currentPosts= result;
              }
              $rootScope.$broadcast('feedChanged', currentPosts);
            },
            getCurrentFeed(){
              return  currentFeed;
            },
            setMakePost(){
              $rootScope.$broadcast('makePost', true);
            },
            setDiscovering(d){
              $rootScope.$broadcast('discovering', d);
            },
            getCurrentPosts(){
              var currentPosts;
            },
            followsCurrentFeed(){
              return mySubreddits.includes(currentFeed);
            },
            followsSubreddit(sub){
              return mySubreddits.includes(sub);
            },
            unfollowSubreddit(sub){
               mySubreddits.splice(mySubreddits.indexOf(sub), 1);
            }
        };
    });
