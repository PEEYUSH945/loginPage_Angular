app.service('authService', function($http) {
    this.login = function(user) {
      console.log('Logging in:', user);
     
    };
  
    this.signup = function(user) {
      console.log('Signing up:', user);
     
    };
  });
  