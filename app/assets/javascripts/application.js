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
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery-jvectormap-1.2.2.min
//= require jquery-jvectormap-world-mill-en
//= require_tree .


$(document).ready(function() {
   var markerList=[];
 });

$(function setMarkers(mlist){
	// alert("reached");
	markerList=mlist;
});

$(function(){
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#383f47'
      }
    },
    
    markers: [
      {latLng: [7.35, 134.46], name: 'Tenzin'},
      {latLng: [42.5, 1.51], name: 'Penpa'},
      {latLng: [14.01, -60.98], name: 'Tenzin'},
      {latLng: [6.91, 158.18], name: 'Tashi'},
      {latLng: [1.3, 103.8], name: 'Sonam'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Tashi'},
      {latLng: [-20.2, 57.5], name: 'Tashi'},
      {latLng: [26.02, 50.55], name: 'Sonam'}
    ]
  });
});