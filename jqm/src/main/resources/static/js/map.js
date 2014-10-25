/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
var flightPath;
var map;
var iterator=0;
$( document ).on( "pageinit", "#map-page", function() {
	initDepartureDate();
    var defaultLatLng = new google.maps.LatLng(32.896828,-97.037997);  // Default to Dallas/Ft Worth International
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        //navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
        drawMap(defaultLatLng);  // No geolocation support, show default map
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }

});


function initDepartureDate() {
    var now = new Date();
    var today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate() + 1);
    // $('#departOnInput').val(today);

}


$(document).on("click", "#beach", function() {
	iterator = 0;
	$.getJSON('./json/avail/beach.json', function(travelTheme) {
		console.log("Beach Travel theme: " + JSON.stringify(travelTheme));
		renderCityPairs(travelTheme,'beach')
	});
	return false;
});

$(document).on("click", "#romance", function() {
	iterator = 0;	$.getJSON('./json/avail/romance.json', function(travelTheme) {
		console.log("Romance Travel theme: " + JSON.stringify(travelTheme));
		renderCityPairs(travelTheme,'romance')
	});
	return false;
});


	function renderCityPairs(travelTheme, type) {
		  for (var i = 0; i < travelTheme.length; i++) {
			    setTimeout(function() {
			      addCity(travelTheme,type);
			    }, i * 200);
		  }
	}

    function addCity(travelTheme, type) {
		  if (type == 'beach') {
			  iconPath = './images/icons/beach_icon_s.png';
		  }	else {
			  iconPath = './images/icons/romance_icon_s.png';
		  }
		  var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(travelTheme[iterator].cityPair.destination.latitude,
			    		travelTheme[iterator].cityPair.destination.longitude),
			    map: map,
			    draggable: false,
			    icon: iconPath,
			    animation: google.maps.Animation.DROP,
			    title: type,
			    customInfo: travelTheme[iterator]
			  })
	      var infoWindow = new google.maps.InfoWindow();
	      infoWindow.setContent(styledCityPairContent(travelTheme[iterator], iterator));
	      infoWindow.open(map, marker);

		  iterator++;

		  google.maps.event.addListener(marker, 'click', markerSelected);
		  //google.maps.event.addListener(infoWindow, 'domready', contentLoaded);
	}


	function showLowestFare() {
	      infoWindow = new google.maps.InfoWindow();
	      infoWindow.setContent(styledCityPairContent(this.customInfo));
	      infoWindow.open(map, this);
	      google.maps.event.addListener(infoWindow, 'domready', contentLoaded);
	}


	function contentLoaded() {
		console.log('cityPairContent loaded and attached to dom');
		//$(document).on('click', '#lowest-fare-' + iterator, buildPriceList("beach"));
	}

	function styledCityPairContent(travelTheme, iterator) {
		var content = '<div onclick="buildPriceList(\'beach\');return false" class="fareTooltip">' +
			'<span style="color:#000;">' + travelTheme.cityPair.destination.address.city + ", " +
			travelTheme.cityPair.destination.address.state + " (" +
			travelTheme.cityPair.destination.code + ") </span>" +
			' <span style="color: #666; font-weight: bold; font-size: 1.1em;" id="lowest-fare-' + iterator  +  '">$' + travelTheme.lowestFare +
			'</span></span>' +
			'</div>';
		return content;
	}


	function markerSelected() {
		map.setCenter(this.getPosition());
		map.setZoom(12);
		if (!map.controls[google.maps.ControlPosition.TOP_CENTER].getAt(0)) {
			var detailsControlDiv = document.createElement('div');
			var detailsControl = new DetailsControl(map, detailsControlDiv, this.getTitle());

			detailsControlDiv.index = 1;
			map.controls[google.maps.ControlPosition.TOP_CENTER].push(detailsControlDiv);
		}
		performSearch(this.getTitle());
		showWeather(map);
		return false;
	}

	function cityDetails(marker) {
		map.setCenter(marker.getPosition());
		map.setZoom(12);
		if (!map.controls[google.maps.ControlPosition.TOP_CENTER].getAt(0)) {
			var detailsControlDiv = document.createElement('div');
			var detailsControl = new DetailsControl(map, detailsControlDiv, marker.getTitle());

			detailsControlDiv.index = 1;
			map.controls[google.maps.ControlPosition.TOP_CENTER].push(detailsControlDiv);
		}
		return false;
	}

    function drawMap(latlng) {
        // Add an overlay to the map of current lat/lng
    	var myOptions = {
    	        zoom: 5,
    	        center: latlng,
    	        mapTypeId: google.maps.MapTypeId.ROADMAP
    	    };

    	var styles = [
	             {
	            	 featureType: "road",
	            	 stylers: [
	            	      { visibility: "off" }
	            	 ]
	             },
	             {
	            	    featureType: 'landscape',
	            	    elementType: 'geometry',
	            	    stylers: [
	            	      { hue: '#ffff00' },
	            	      { gamma: 1.4 },
	            	      { saturation: 82 },
	            	      { lightness: 96 }
	            	    ]
	             },
	             {
	            	    featureType: 'landscape.natural.landcover',
	            	    elementType: 'geometry',
	            	    stylers: [
	            	              { visibility: "off" }
	            	    ]
	             },
	            
	             {
	            	    featureType: 'administrative.locality',
	            	    stylers: [
	            	              { visibility: "off" }
	            	    ]
	             }
	             
    	];

    	map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    	map.setOptions({styles: styles});

        var origin = new google.maps.Marker({
            position: latlng,
            map: map,
            //icon: './images/adventure_icon.png',
            draggable: true,
            title: "Dallas/Ft Worth International"
        });

        /*
        var dest = new google.maps.Marker({
        	position: new google.maps.LatLng(42.896828,-90.037997),
        	map: map,
        	draggable: true,
        	title: "Drag to your destination"
        });
        */

        //map.setCenter(latlng);

        //var flightPlanCoordinates = [latlng, new google.maps.LatLng(42.896828,-90.037997)];

        /*
        var planeSymbol = {
        	    path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        	    scale: 0.0666,
        	    strokeOpacity: 1,
        	    color: 'blue',
        	    strokeWeight: 2
        	 };


        flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeWeight: 0,
            icons: [{
                icon: planeSymbol,
                offset: '100%'
              }],
             map: map
          });


        animateFlight();
        */
    }


    function animateFlight() {
        var count = 0;
        window.setInterval(function() {
          count = (count + 1) % 200;

          var icons = flightPath.get('icons');
          icons[0].offset = (count / 2) + '%';
          flightPath.set('icons', icons);
      }, 50);
    }
