angular.module('angulartestApp')
    .directive('header', function() {
        return {

            transclude: true,
            scope: {},
            templateUrl: 'views/userdetails.html'
        };
    });
