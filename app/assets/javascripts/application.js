// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery_ujs
//= require bootstrap.js
//= require_tree .

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(30,0),
    zoom: 2,
    minZoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<iframe src="/stories/1"></iframe>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
  });

  for (var i=0; i<window.stories.length; i++){ 
    markerLat = window.stories[i]["latitude"];
    markerLong = window.stories[i]["longitude"];
    markerID = window.stories[i]["id"]

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markerLat,markerLong),
      map: map,
      title:"Hello World!"
    });
    initMarker(marker, i);
  }

  function initMarker(marker, number) {
    google.maps.event.addListener(marker, 'click', function(e) {
      // infowindow.open(map,markers[i]);
      window.location.href = ("/stories/" + window.stories[number]["id"]);
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);


