$(document).ready(function() {
  // Back to top
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Mobile nav
  $(".toggle-nav").on("click", function() {
    $('body').toggleClass("nav-is-open");
  });

  // Mobile nav
  $(".question").on("click", function() {
    $(this).parent().toggleClass("answer-is-open");
  });
  $(".card-faq:not(.answer-is-open) .answer").on("click", function() {
    $(this).parent().toggleClass("answer-is-open");
  });

});

// Attend "Tabs"
function attendTab(tab) {
  $("#attend").attr('class', ('active-'+tab));
}

// Countup
var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};
var count1 = new CountUp("count1", 0, 200, 0, 5, options);
count1.start();
/*var count2 = new CountUp("count2", 0, 50, 0, 3.5, options);
count2.start();
var count3 = new CountUp("count3", 0, 85, 0, 3.5, options);
count3.start(); */
var count4 = new CountUp("count4", 0, 24, 0, 5, options);
count4.start();

// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoidmljbG91IiwiYSI6Imo2TnUwRVEifQ.Lym1WQrkrRlIXtSKS7n15w';
// Create a map in the div #map
var map = L.mapbox.map('map', 'viclou.mn43oghc', {scrollWheelZoom: false,zoomControl: false}).setView([40.05337319344778,-75.55186271667479], 14);
new L.Control.Zoom({ position: 'topright' }).addTo(map);
L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -75.52398920059204,
          40.05530306542531
        ]
    },
    properties: {
        title: 'Microsoft',
        description: '',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        "marker-color": "#3F51B5",
        "marker-size": "large",
    }
}).addTo(map);
function mapTransit() {
  $("#venue").attr('class', 'active-card-transit');
  var geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"stroke":"#d11e48","stroke-width":4,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[-75.15000343322754,39.97665969185209],[-75.15154838562012,39.951069364619535],[-75.18279075622559,39.95574080728056],[-75.18957138061523,39.96692465507728],[-75.21720886230469,39.97580464281733],[-75.23609161376953,39.98185552901966],[-75.24879455566406,39.989484143565306],[-75.25257110595703,40.00000497268461],[-75.26012420654297,40.00631669218863],[-75.27214050292969,40.00552775916049],[-75.28861999511719,40.00815750046493],[-75.30990600585938,40.01972715869301],[-75.32587051391602,40.027088647268364],[-75.33256530761719,40.035237940230104],[-75.34578323364258,40.04075787580295],[-75.36346435546874,40.045094654568295],[-75.37033081054688,40.044043339592946],[-75.38372039794922,40.04562030597637],[-75.39487838745117,40.04798568715563],[-75.41032791137695,40.04982537132894],[-75.42800903320312,40.04627736453682],[-75.43367385864258,40.04759146265877],[-75.44036865234375,40.0489055354487],[-75.4482650756836,40.045094654568295],[-75.4566764831543,40.0433862595006],[-75.48465728759766,40.042729173075436],[-75.49324035644531,40.04312342569049],[-75.51383972167969,40.03707796840224]]}}]};
  map.setView([40.046014541872594,-75.57357788085936], 11);
  map.featureLayer.setGeoJSON(geojson);
}
function mapDriving() {
  $("#venue").attr('class', 'active-card-driving');
  var geojson = {"type":"FeatureCollection","features":[]};
  map.featureLayer.setGeoJSON(geojson);
  map.setView([40.046014541872594,-75.87357788085936], 10);
}

// Scroll Timer!
var scrollTimer = null;
$(window).scroll(function () {
		if (scrollTimer) {
				clearTimeout(scrollTimer);   // clear any previous pending timer
		}
		scrollTimer = setTimeout(handleScroll, 40);// 50);   // set new timer
});

function handleScroll() {
	scrollTimer = null;
  if ($(".nav-top").offset().top < 20) {
    $(".nav-top").addClass("at-top");
  }
  else {
    $(".nav-top").removeClass("at-top");
  }
}
