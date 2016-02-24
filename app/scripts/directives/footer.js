angular.module('angulartestApp')
.directive('footer', function() {
  return {
  
   transclude:true,
   scope:{},
    templateUrl:'views/footer.html'
  };
  });