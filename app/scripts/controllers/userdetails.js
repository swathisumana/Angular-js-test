'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angulartestApp')
    .controller('UserdetailsCtrl', function($scope, $state, Viewservice) 
    {
        $scope.data = function() 
        {
            $scope.login=Viewservice.getUserDetails();
            console.log($scope.login.uname)

        };

    });
