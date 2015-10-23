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
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(35.679799, 139.762351,17),
      map: mapCanvas
    });
    marker.setMap(mapCanvas);
  }
  // Google Map Initialze
  initialize();
}])
// MarkerMultipleController
.controller("MarkerMultipleController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(0.1, 0.1),
      zoom : 10,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    // Normal Marker
    var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(0, 0),
      map: mapCanvas
    });
    // Image Marker
    var marker2 = createMarker({
      position : new google.maps.LatLng(0.1, 0.1),
      map : mapCanvas,
      icon : "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=home%7CFFFF00"
    });
    // Drag Marker
    var marker3 = createMarker({
      position : new google.maps.LatLng(0.2, 0.2),
      map : mapCanvas,
      draggable:true
    });

    var marker1_check = document.getElementById("marker1_check");
    google.maps.event.addDomListener(marker1_check, "click", function() {
      var mMap = null;
      if (marker1_check.checked === true) {
        mMap = mapCanvas;
      }
      marker1.setMap(mMap);
    });


    var marker2_btn = document.getElementById("marker2_btn");
    var marker2_txt = document.getElementById("marker2_txt");
    google.maps.event.addDomListener(marker2_btn, "click", function() {
      marker2.setIcon(marker2_txt.value);
    });
    marker2_txt.value = marker2.getIcon();

    var marker3_btn = document.getElementById("marker3_btn");
    var marker3_txt = document.getElementById("marker3_txt");
    google.maps.event.addDomListener(marker3_btn, "click", function() {
      marker3_txt.value = marker3.getPosition();
    });
    marker3_txt.value = marker3.getPosition();
  }

  function createMarker(opts) {
    var marker = new google.maps.Marker(opts);
    return marker;
  }

  // Google Map Initialze
  initialize();
}]);