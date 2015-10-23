angular.module("SampleApp", ["Controllers", "ngRoute", "Directives"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "HomeController",
    templateUrl : "/partials/home.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);