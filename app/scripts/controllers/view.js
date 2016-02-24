'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angulartestApp')
    .controller('ViewCtrl', function($scope, $state, Viewservice)
    {
        console.log('In ctrl');
        $scope.data = {};
        $scope.fnSubmit = function()
        {
            console.log('in fun');
            Viewservice.loginUser($scope.data.username, $scope.data.password).success(function(data) 
            {
                 Viewservice.setUserDetails($scope.data.username, $scope.data.password);
                console.log($scope.data.username);
                console.log($scope.data.password);

                $state.go('dashboard');
            }).error(function(data) 
            {
                alert('You entered wrong Username/password');
            });
        };
        if($state.is('login'))
        {
            Viewservice.removeInfo();
        }

    });

