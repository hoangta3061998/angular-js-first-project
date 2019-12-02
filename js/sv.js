angular
  .module("myapp", [])
  .controller("myCtrl", [
    "$scope",
    "service",
    "$http",
    function($scope, service, $http) {
      // $scope.todos = service.get($http);
      service.get().then(function(data) {
        $scope.todos = data;
      });
      // $http.get("http://jsonplaceholder.typicode.com/todos").then(function(response){
      //     $scope.todos = response.data;
      // })
      $scope.test = service.post;
    }
  ])
  .factory("service", function($http) {
    var Service = {};
    Service.get = function() {
      return $http
        .get("http://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
          return response.data;
        });
    };
    Service.post = "fsad";
    return Service;
  });
