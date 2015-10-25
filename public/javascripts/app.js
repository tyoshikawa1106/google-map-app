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
  when("/info_window_in_form", {
    controller : "InfoWindowInFormController",
    templateUrl : "/partials/info_window_in_form.html"
  }).
  when("/zoom_event", {
    controller : "ZoomEventController",
    templateUrl : "/partials/zoom_event.html"
  }).
  when("/map_event", {
    controller : "MapEventController",
    templateUrl : "/partials/map_event.html"
  }).
  when("/mvc_object", {
    controller : "MVCObjectController",
    templateUrl : "/partials/mvc_object.html"
  }).
  when("/polyline", {
    controller : "PolylineController",
    templateUrl : "/partials/polyline.html"
  }).
  when("/geocode", {
    controller : "GeocodeController",
    templateUrl : "/partials/geocode.html"
  }).
  when("/route_search", {
    controller : "RouteSearchController",
    templateUrl : "/partials/root_search.html"
  }).
  when("/elevation", {
    controller : "ElevationController",
    templateUrl : "/partials/elevation.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);