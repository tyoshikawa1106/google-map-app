angular.module("SampleApp", ["Controllers", "ngRoute", "Directives"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "HomeController",
    templateUrl : "/partials/home.html"
  }).
  when("/marker", {
    controller : "MarkerController",
    templateUrl : "/partials/marker.html"
  }).
  when("/marker_multiple", {
    controller : "MarkerMultipleController",
    templateUrl : "/partials/marker_multiple.html"
  }).
  when("/info_window", {
    controller : "InfoWindowController",
    templateUrl : "/partials/info_window.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);