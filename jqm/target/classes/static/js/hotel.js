var service;

function performSearch(type) {
  console.log('type of hotel search ' + type);	
  service = new google.maps.places.PlacesService(map);	
  var request = {
    bounds: map.getBounds(),
    //keyword: 'attractions',
    //types: ['zoo', 'amusement_park', 'movie_theater', 'aquarium']
    keyword: type + ' ' + 'hotels',
    types: ['lodging', 'boarding']
    //minPriceLevel: 1
    //maxPriceLevel: 4
  };
  service.radarSearch(request, callback);
}

function callback(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    alert(status);
    return;
  }
  for (var i = 0, result; result = results[i]; i++) {
    createMarker(result);
  }
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      // Star
      path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
      fillColor: '#22A7F0',
      fillOpacity: 1,
      scale: 1/4,
      //strokeColor: '#bd8d2c',
      strokeColor: '#22A7F0',
      strokeWeight: 1
    }
  });

  google.maps.event.addListener(marker, 'click', function() {
    service.getDetails(place, function(result, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }
      infoWindow = new google.maps.InfoWindow();
      infoWindow.setContent(styledContent(result));
      infoWindow.open(map, marker);
    });
  });
}

function styledContent(hotel) {
	var content = '<div id="content">' +
		'<span style="font-size:large;color=22A7F0">' + '<a href="javascript:window.open(\'' + hotel.website  + '\')"><b>' + hotel.name +  '</b></a></span><br/>' +
		'<span><b>Address:</b> ' + hotel.formatted_address + '</span><br/>' + 
		'<span><b>Tel: </b>' + hotel.formatted_phone_number + '</span><br/>';
		if (hotel.photos) {
			for (var i=0; i < hotel.photos.length; i++) {
				content += '<img src="' + hotel.photos[i].getUrl({'maxWidth': 100, 'maxHeight': 100}) + '"/>';
				if ( i == 2) break;
			}	
		}		
 	content += '</div>';
	return content;
}
