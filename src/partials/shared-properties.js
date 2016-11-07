sharedService.service('SharedService', function () {
        var property = 'Front';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });
