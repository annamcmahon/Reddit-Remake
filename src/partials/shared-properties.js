sharedService.service('SharedService', function () {
        var property = 'Front';
        var subreddits = {};
        var mySubreddits = {};
        var friends = {};

        // have each array object hold id so that when filtered it still knows which post element it correspond to
        var posts = [
        {id:0, subreddit: "/r/cats", postTitle: "Just got my senior pics back", source:"source1", votes: 9, pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:1, subreddit: "/r/cats", postTitle: "And you think you had a rough day", source:"imgur", votes: 7, pic:"https://i.redd.it/qi9qollfydwx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:2, subreddit: "/r/cats", postTitle: "Adopt today!", source:"spca.com", votes: 6, pic:"http://i.imgur.com/uloykHU.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false,poster: "anna"},
        {id:3, subreddit: "/r/cats", postTitle: "Oh deer", source:"source4", votes:3,pic:"http://i.imgur.com/UbhuYRv.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:4, subreddit: "/r/cats", postTitle: "Just got my senior pics back", source:"source1", votes: 9, pic:"https://i.redd.it/5gf5qfi61jsx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false,poster: "anna"},
        {id:5, subreddit: "/r/cats", postTitle: "And you think you had a rough day", source:"imgur", votes: 7, pic:"https://i.redd.it/qi9qollfydwx.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:6, subreddit: "/r/cats", postTitle: "Adopt today!", source:"spca.com", votes: 6, pic:"http://i.imgur.com/uloykHU.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:7, subreddit: "/r/cats", postTitle: "Oh deer", source:"source4", votes:3,pic:"http://i.imgur.com/UbhuYRv.jpg", downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:8, subreddit: "/r/cats", postTitle: "Happy Monday", source:"imgur", votes: 9, pic:"http://i.imgur.com/R0CNlPY.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:9, subreddit: "/r/cats", postTitle: "What's next?", source:"cnn", votes: 7,pic:"http://i.imgur.com/2WWJ5af.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:10, subreddit: "/r/cats", postTitle: "A look into the future", source:"imgur", votes: 6, pic:"http://i.imgur.com/5jLWFZZ.jpg",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"},
        {id:11,subreddit: "/r/cats", postTitle: "Lazy Day", source:"aww", votes:3,pic:"http://i.imgur.com/ySbhL8E.png",downArrow: false, upArrow: false, share: false, comment: false, flag: false, fav: false, poster: "anna"}
        ];
        var allSubreddits =["/r/cats", "/r/dogs", "/r/tech", "/r/sports", "/r/cs", "/r/extremesports", "/r/food", "/r/interview", "/r/movies"];
        var mySubreddits = ["/r/cats", "/r/dogs"];
        var mySavedPosts = [1,5,7];
        var myPosts = [9];
        var myComments = [];

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
            }
        };
    });
