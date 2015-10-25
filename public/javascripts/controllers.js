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
}])
// InfoWindowController
.controller("InfoWindowController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(0, 0),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    var infoWnd = new google.maps.InfoWindow({
      position: new google.maps.LatLng(0, 0)
    });

    var button = document.createElement("button");
    button.innerText = "Please Click!!";
    google.maps.event.addDomListener(button, "click", function() {
      infoWnd.setContent("Hello World");
    });

    infoWnd.setContent(button);
    infoWnd.open(mapCanvas);
  }
  // Google Map Initialze
  initialize();
}])
// InfoWindowInFormController
.controller("InfoWindowInFormController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(0.1, 0.1),
      zoom : 10,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });

    var marker = createMarker({
      position : new google.maps.LatLng(0,0),
      map : mapCanvas
    });

    // Get HTML FORM BY BODY
    var form = document.getElementById("markerPropertyForm");
    var changeBtn = document.getElementById("changeBtn");
    var iconTxt = document.getElementById("iconTxt");
    google.maps.event.addDomListener(changeBtn, "click", function(){
      marker.setIcon(iconTxt.value);
    });

    // View InfoWindow
    //var infoWnd = new google.maps.InfoWindow({
    //  content : form
    //});
    //infoWnd.open(null, marker);
  }

  function createMarker(opts) {
    var marker = new google.maps.Marker(opts);
    return marker;
  }
  
  // Google Map Initialze
  initialize();
}])
// ZoomEventController
.controller("ZoomEventController", ["$scope", function($scope){
  var mapCanvas;
  var marker;
  var infoWnd;
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(35.679799, 139.762351,17),
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(35.679799, 139.762351,17),
      map: mapCanvas
    });
    marker.setMap(mapCanvas);

    // Get HTML FORM BY BODY
    var form = document.getElementById("markerPropertyForm");

    // View InfoWindow
    infoWnd = new google.maps.InfoWindow({
      content : form
    });
    infoWnd.open(null, marker);
  }
  // Google Map Initialze
  initialize();

  // Change Zoom Level Change Icon
  google.maps.event.addListener(mapCanvas, "zoom_changed", function() {
    var zoom = mapCanvas.getZoom();
    var iconSize = -(1/20) * zoom + 2;
    var imgUrl = "https://chart.googleapis.com/chart?chst=d_map_spin&chld=" + iconSize + "|0|FF8429|23|b|" + zoom;
    marker.setIcon(imgUrl);
  });

  // Change Zoom Level Change Form
  google.maps.event.addListener(mapCanvas, "zoom_changed", function() {
    infoWnd.setContent("現在のズームレベル : " + mapCanvas.getZoom());
  });
}])
// MapEventController
.controller("MapEventController", ["$scope", function($scope){

  var mapEvents = ["bounds_changed", "center_changed", "click", "dblclick",
                    "drag", "dragend", "dragstart", "maptypeid_changed",
                      "mousemove", "mouseout", "mouseover", "zoom_changed"];

  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(35, 136),
      zoom : 5,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });

    var loop = new google.maps.MVCArray(mapEvents);
    loop.forEach(function(evtName, i) {
      google.maps.event.addListener(mapCanvas, evtName, function(arg) {
        pushToEvtList(evtName, arg);
      });
    });
  }

  function pushToEvtList(evtName, arg) {
    var evtList = document.getElementById("evtList");
    var date = new Date();
    var div = document.createElement("div");
    div.style.borderBottom = "1px dotted gray";
    div.style.whiteSpace = "nowrap";
    var txt = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + evtName;
    if (arg !== undefined) {
      txt += "&nbsp;&nbsp;&nbsp;";
      for (var pName in arg) {
        txt += "&nbsp;&nbsp;&nbsp;" + pName + " : " + arg[pName].toString() + ",";
      }
    }
    div.innerHTML += txt;
    evtList.appendChild(div);
  }

  // Google Map Initialze
  initialize();
}])
// MVCObjectController
.controller("MVCObjectController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(0.1, 0.1),
      zoom : 8,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    
    var marker = createMarker({
      position : new google.maps.LatLng(0,0),
      map : mapCanvas
    });

    var mvcObject = new google.maps.MVCObject();
    mvcObject.set("visible", true);

    var markerCheckbox = document.getElementById("markerChkbox");
    google.maps.event.addDomListener(markerChkbox, "click", function() {
      mvcObject.set("visible", markerChkbox.checked);
    });

    var center = mapCanvas.getCenter();
    for (var i = 0; i < 10; i++) {
      var marker = createMarker({
        position : new google.maps.LatLng(center.lat() + Math.random() * 3 - 1.5, center.lng() + Math.random() * 3 - 1.5),
        map : mapCanvas
      });
      marker.bindTo("visible", mvcObject, "visible", true);
    }
  }

  function createMarker(opts) {
    var marker = new google.maps.Marker(opts);
    return marker;
  }

  // Google Map Initialze
  initialize();
}])
// PolylineController
.controller("PolylineController", ["$scope", function($scope){
  function initialize() {
    var mapDiv = document.getElementById("map_canvas");
    var mapCanvas = new google.maps.Map(mapDiv, {
      center : new google.maps.LatLng(0, 0),
      zoom : 8,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });

    var polyline = new google.maps.Polyline({
      map : mapCanvas,
      path : [
        new google.maps.LatLng(0,0),
        new google.maps.LatLng(1,1),
        new google.maps.LatLng(0,2)
      ],
      strokeColor : "green",
      stokeOpacity : 1,
      stokeWeight : 5
    });

    var linePath = polyline.getPath();
    linePath.forEach(function(latlng, i) {
      var marker = createMarker({
        map : mapCanvas,
        draggable : true,
        position : latlng
      });
      google.maps.event.addListener(marker, "position_changed", function() {
        linePath.setAt(i, this.position);
      });
    });
  }

  function createMarker(opts) {
    var marker = new google.maps.Marker(opts);
    return marker;
  }

  // Google Map Initialze
  initialize();
}])
// GeocodeController
.controller("GeocodeController", ["$scope", function($scope){
  var mapCanvas, marker, geocoder, infoWnd;
  function initialize() {
    var initPos = new google.maps.LatLng(0,0);
    mapCanvas = new google.maps.Map(document.getElementById("map_canvas"), {
      center : initPos,
      zoom : 3,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    console.log(mapCanvas);
    geocoder = new google.maps.Geocoder();
    infoWnd = new google.maps.InfoWindow();
    marker = createMarker({
      map : mapCanvas,
      //position : new google.maps.LatLng(0,0),
      draggable : true
    });
    google.maps.event.addListener(marker, "dragend", doReverseGeocode);
    var geocodeBtn = document.getElementById("doGeocode");
    google.maps.event.addDomListener(geocodeBtn, "click", doGeocode);
  }

  function doGeocode(mouseEvt) {
    var request = {
      address : document.getElementById("address").value
    };
    geocoder.geocode(request, function(results, status) {
      callback_geododer(results, status, false);
    });
  }

  function doReverseGeocode(mouseEvt) {
    marker.setPosition(mouseEvt.latLng);
    var request = {
      location : mouseEvt.latLng
    };
    geocoder.geocode(request, function(results, status) {
      callback_geododer(results, status, true);
    });
  }

  function callback_geododer(results, status, isReverseGeocode) {
    if (status ==  google.maps.GeocoderStatus.OK) {
      var result = results[0];

      google.maps.event.addListenerOnce(mapCanvas, "center_changed", function() {
        marker.setPosition(result.geometry.location);
        var txt = "latlng:" + result.geometry.location.toUrlValue() + "<br/>" + "address:" + result.formatted_address;
        infoWnd.setContent(txt);
        infoWnd.open(mapCanvas, marker);
      });

      if (isReverseGeocode == true) {
        mapCnvas.panTo(result.geometry.location);
      } else {
        if ("viewport" in result.geometry) {
          mapCanvas.fitBounds(result.geometry.viewport);
        } else if ("bounds" in result.geometry) {
          mapCanvas.fitBounds(result.geometry.bounds);
        }
      }
    } else {
      alert("Code:" + status);
    }
  }

  function createMarker(opts) {
    var marker = new google.maps.Marker(opts);
    console.log(marker);
    return marker;
  }

  // Google Map Initialze
  initialize();
}])
// RouteSearchController
.controller("RouteSearchController", ["$scope", function($scope){
  var mapCanvas;
  function initialize() {
    var initPos = new google.maps.LatLng(35.658613, 139.745525);
    var mapOptions = {
      center : initPos,
      zoom : 16,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    mapCanvas = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var request = {
      origin : "東京駅",
      destination : "東京タワー",
      travelMode : google.maps.DirectionsTravelMode.DRIVING
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, callback_direction);
  }

  function callback_direction(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      var directionsDisplay = new google.maps.DirectionsRenderer({
        map : mapCanvas
      });
      directionsDisplay.setDirections(result);
    }
  }

  // Google Map Initialze
  initialize();
}]);