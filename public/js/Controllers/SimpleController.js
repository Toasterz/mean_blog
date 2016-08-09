(function() {
  angular.module('ngBlog')
          .controller('SimpleController', SimpleController)

  SimpleController.$inject = ['$scope', 'UserService'];

  function SimpleController($scope, UserService)
  {
    $scope.message = "working Angular";
    UserService.getAllUsers()
              .then(function(response)
            {
              console.log(response);
            });

    var userObj =
    {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'andtheeast@sideboys.com'
    };
    UserService.createUser(userObj)
                .then(function(response)
              {
                console.log(response);
              });
  }
}());
