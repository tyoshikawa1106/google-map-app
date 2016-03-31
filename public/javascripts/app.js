angular.module("SampleApp", ["Controllers", "ngRoute", "Directives"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "HomeController",
    templateUrl : "/angular_views/home.html"
  }).
  when("/marker", {
    controller : "MarkerController",
    templateUrl : "/angular_views/marker.html"
  }).
  when("/marker_multiple", {
    controller : "MarkerMultipleController",
    templateUrl : "/angular_views/marker_multiple.html"
  }).
  when("/info_window", {
    controller : "InfoWindowController",
    templateUrl : "/angular_views/info_window.html"
  }).
  when("/info_window_in_form", {
    controller : "InfoWindowInFormController",
    templateUrl : "/angular_views/info_window_in_form.html"
  }).
  when("/zoom_event", {
    controller : "ZoomEventController",
    templateUrl : "/angular_views/zoom_event.html"
  }).
  when("/map_event", {
    controller : "MapEventController",
    templateUrl : "/angular_views/map_event.html"
  }).
  when("/mvc_object", {
    controller : "MVCObjectController",
    templateUrl : "/angular_views/mvc_object.html"
  }).
  when("/polyline", {
    controller : "PolylineController",
    templateUrl : "/angular_views/polyline.html"
  }).
  when("/geocode", {
    controller : "GeocodeController",
    templateUrl : "/angular_views/geocode.html"
  }).
  when("/route_search", {
    controller : "RouteSearchController",
    templateUrl : "/angular_views/root_search.html"
  }).
  when("/elevation", {
    controller : "ElevationController",
    templateUrl : "/angular_views/elevation.html"
  }).
  when("/street_view", {
    controller : "StreetViewController",
    templateUrl : "/angular_views/street_view.html"
  }).
  when("/auto_complete", {
    controller : "AutoCompleteController",
    templateUrl : "/angular_views/auto_complete.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);