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
//= require jquery.fancybox
//= require purl
//= require_tree .

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(30,0),
    zoom: 3,
    minZoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  if( $('#map-canvas').css('margin-top') == '0px' ) {
    
    mapOptions = {
      center: new google.maps.LatLng(40,15),
      zoom: 0,
      minZoom: 0,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };  
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  

  var homeButton = document.getElementById("wtb");
  homeButton.onclick=function(){
    //reset zoom
    var mapZoom=3; 
    var mapCentre=new google.maps.LatLng(30,0); 
    var mapLat=mapCentre.lat(); 
    var mapLng=mapCentre.lng(); 
    var cookiestring=mapLat+"_"+mapLng+"_"+mapZoom; 
    if( $('#map-canvas').css('margin-top') == '0px' ) {
      mapZoom=0; 
      mapCentre=new google.maps.LatLng(40,15); 
      mapLat=mapCentre.lat(); 
      mapLng=mapCentre.lng(); 
      cookiestring=mapLat+"_"+mapLng+"_"+mapZoom; 
    }
    setCookie("myMapCookie",cookiestring, 30); 
  };

  loadMapState();

  for (var i=0; i<window.stories.length; i++){ 
    markerLat = window.stories[i]["latitude"];
    markerLong = window.stories[i]["longitude"];
    markerID = window.stories[i]["id"]
    markerAuthor = window.stories[i]["author"]

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markerLat,markerLong),
      map: map,
      title:markerAuthor
    });
    initMarker(marker, i);
  }

  function initMarker(marker, number) {
    google.maps.event.addListener(marker, 'click', function(e) {
      // window.location.href = ("/?n=" + window.stories[number]["id"]);
      //loads fancybox without page reload, but changes url to match story url
      history.replaceState("", "Where's Tibet?", "/?n=" + window.stories[number]["id"]);
      $.fancybox( {href: ('/stories/' + $.url(window.location.href).param('n')) , type:'iframe',  afterClose : function() {
        history.replaceState("", "Where's Tibet?", "/"); return;}
      });
    });
  }

  if ($.url(window.location.href).param('n')) {
    $.fancybox( {href: ('/stories/' + $.url(window.location.href).param('n')) , type:'iframe',  afterClose : function() {
        history.replaceState("", "Where's Tibet?", "/"); return;}
    });
  }
  google.maps.event.addListener(map, 'tilesloaded', tilesLoaded);
  function tilesLoaded() {
    google.maps.event.clearListeners(map, 'tilesloaded');
    google.maps.event.addListener(map, 'zoom_changed', saveMapState);
    google.maps.event.addListener(map, 'dragend', saveMapState);
  }
  function saveMapState() { 
    var mapZoom=map.getZoom(); 
    var mapCentre=map.getCenter(); 
    var mapLat=mapCentre.lat(); 
    var mapLng=mapCentre.lng(); 
    var cookiestring=mapLat+"_"+mapLng+"_"+mapZoom; 
    setCookie("myMapCookie",cookiestring, 30); 
  } 

  function loadMapState() { 
      var gotCookieString=getCookie("myMapCookie"); 
      var splitStr = gotCookieString.split("_");
      var savedMapLat = parseFloat(splitStr[0]);
      var savedMapLng = parseFloat(splitStr[1]);
      var savedMapZoom = parseFloat(splitStr[2]);
      if ((!isNaN(savedMapLat)) && (!isNaN(savedMapLng)) && (!isNaN(savedMapZoom))) {
          map.setCenter(new google.maps.LatLng(savedMapLat,savedMapLng));
          map.setZoom(savedMapZoom);
      }
  }

  function setCookie(c_name,value,exdays) {
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
      document.cookie=c_name + "=" + c_value;
  }

  function getCookie(c_name) {
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++)
      {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
          {
          return unescape(y);
          }
        }
      return "";
  }  
}
google.maps.event.addDomListener(window, 'load', initialize);




