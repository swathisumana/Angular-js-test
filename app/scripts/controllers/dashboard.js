'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angulartestApp')
  .controller('DashboardCtrl', function ($scope,$state,Viewservice)
  {
 $scope.fnLogout=function(){

$scope.login = Viewservice.getUserDetails();
console.log(Viewservice);
    Viewservice.removeInfo();     
         $state.go('home');
    
  }
  });