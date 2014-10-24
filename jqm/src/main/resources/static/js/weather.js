var weatherLayer = new google.maps.weather.WeatherLayer({
	    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT	  
});

function showWeather(map) {
	weatherLayer.setMap(map);
}


function hideWeather() {
	weatherLayer.setMap(null);
}