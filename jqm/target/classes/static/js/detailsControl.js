
	
DetailsControl.prototype.active_ = null;
DetailsControl.prototype.type_ = null;

// Define setters and getters for this property.
DetailsControl.prototype.getActive = function() {
  return this.active_;
};

DetailsControl.prototype.setActive = function(active) {
  this.active_ = active;
};


//Define setters and getters for this property.
DetailsControl.prototype.getType = function() {
  return this.type_;
};

DetailsControl.prototype.setType = function(type) {
  this.type_ = type;
};

function DetailsControl(map, div, type) {

  // Get the control DIV. We'll attach our control UI to this DIV.
  var controlDiv = div;

  // We set up a variable for the 'this' keyword since we're adding event
  // listeners later and 'this' will be out of scope.
  var control = this;
  
  control.setType(type);

  // Set CSS styles for the DIV containing the control. Setting padding to
  // 5 px will offset the control from the edge of the map.
  controlDiv.style.padding = '5px';

  // Set CSS for the control border.
  var weatherUI = document.createElement('div');
  setControlUIStyle(weatherUI, 'Click to see the weather');
  controlDiv.appendChild(weatherUI);

  // Set CSS for the control interior.
  var weatherText = document.createElement('div');
  setControlTextStyle(weatherText, 'Weather');
  weatherUI.appendChild(weatherText);

  var hotelsUI = document.createElement('div');
  setControlUIStyle(hotelsUI, 'Click to see the hotels');
  controlDiv.appendChild(hotelsUI);

  // Set CSS for the control interior.
  var hotelsText = document.createElement('div');
  setControlTextStyle(hotelsText, 'Hotels');
  hotelsUI.appendChild(hotelsText);
  
  var attractionsUI = document.createElement('div');
  setControlUIStyle(attractionsUI, 'Click to see the attractions');
  controlDiv.appendChild(attractionsUI);

  // Set CSS for the control interior.
  var attractionsText = document.createElement('div');
  setControlTextStyle(attractionsText, 'Attractions');
  attractionsUI.appendChild(attractionsText);
  
  google.maps.event.addDomListener(hotelsText, 'click', function() {
	  control.setActive('Hotels');
	  hideWeather(map);
	  performSearch(control.getType());
  });
  
  google.maps.event.addDomListener(weatherText, 'click', function() {
	  control.setActive('Weather');
	  showWeather(map);
  });
  
  google.maps.event.addDomListener(attractionsText, 'click', function() {
	  control.setActive('Attractions');
	  alert('Attractions clicked...');
  });


}


function setControlUIStyle(controlUI, title) {
	controlUI.title = title;
	controlUI.style.backgroundColor = 'white';
	controlUI.style.borderStyle = 'solid';
	controlUI.style.borderWidth = '1px';
	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.style.display = 'inline-block';
	controlUI.style.padding = "1px";
}


function setControlTextStyle(controlText, title) {
	controlText.innerHTML = title;
	controlText.style.fontSize = '12px';
	controlText.style.paddingLeft = '4px';
	controlText.style.paddingRight = '4px';  	
}

