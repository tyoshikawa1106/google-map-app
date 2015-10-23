angular.module("Controllers", ["Services"])
// HomeController
.controller("HomeController", ["$scope", function($scope){
  function initialize() {
    // ROADMAP
    var loadMapDiv = document.getElementById("loadMap");
    var loadMapCanvas = new google.maps.Map(loadMapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    // SATELLITE
    var satelliteMapDiv = document.getElementById("satelliteMap");
    var satelliteMapCanvas = new google.maps.Map(satelliteMapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.SATELLITE
    });
    // HYBRID
    var hybridMapDiv = document.getElementById("hybridMap");
    var hybridMapCanvas = new google.maps.Map(hybridMapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.HYBRID
    });
    // TERRAIN
    var terrainMapDiv = document.getElementById("terrainMap");
    var terrainMapCanvas = new google.maps.Map(terrainMapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.TERRAIN
    });
  }
  // Google Map Initialze
  initialize();
}])
// MarkerController
.controller("MarkerController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
  }
  // Google Map Initialze
  initialize();
}]);