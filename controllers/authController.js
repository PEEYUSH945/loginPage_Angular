app.controller('authController', function($scope, authService) {
    $scope.isLogin = true;
    $scope.user = {};
  
    $scope.toggleForm = function() {
      $scope.isLogin = !$scope.isLogin;
    };
  
    $scope.submitForm = function() {
      if ($scope.isLogin) {
        authService.login($scope.user);
      } else {
        if ($scope.user.password === $scope.user.confirmPassword) {
          authService.signup($scope.user);
        } else {
          alert('Passwords do not match');
        }
      }
    };
  });
  