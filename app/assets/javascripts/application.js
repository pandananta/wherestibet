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
//= require jquery-1.7.1.min.js
//= require jquery_ujs
//= require bootstrap.js
//= require_tree .

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(0,0),
    zoom: 4,
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

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(0,0),
      map: map,
      title:"Hello World!"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    // window.location.href = '/stories/1';
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

