sharedService.service('SharedService', function () {
        var property = 'Front';
        var subreddits = {};
        var mySubreddits = {};
        var friends = {};

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });
