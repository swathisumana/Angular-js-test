'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angulartestApp')
    .controller('MainCtrl', function ($scope, $state) 
    {
        $scope.fnLogin = function() 
        {
            $state.go('login');

        };

    });
