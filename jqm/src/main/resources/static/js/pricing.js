var priceList = {"price":[
{"destinationLocation": "MIA",
"fareInfo": [
  {"fltNbr": 1364, "LowestFare": 100.45, "deptTime": "5:15am", "returnDate": "2014-11-11", "returnTime": "9:00am"},
  {"fltNbr": 942, "LowestFare": 200.45, "time": "7:40am", "returnDate": "2014-11-12", "returnTime": "9:00am"},
  {"fltNbr": 942, "LowestFare": 300.45, "time": "12:00pm", "returnDate": "2014-11-13", "returnTime": "9:00am"},
  {"fltNbr": 942, "LowestFare": 400.45, "time": "1:50pm", "returnDate": "2014-11-14", "returnTime": "9:00am"}
 ]
},
{"destinationLocation": "CUN",
	"fareInfo": [
	  {"fltNbr": 82, "LowestFare": 293.45, "time": "5:15am", "returnDate": "2014-11-11", "returnTime": "9:00am"},
	  {"fltNbr": 1501, "LowestFare": 400.23, "time": "7:40am", "returnDate": "2014-11-12", "returnTime": "10:00am"},
	  {"fltNbr": 1211, "LowestFare": 430.00, "time": "12:00pm", "returnDate": "2014-11-14", "returnTime": "9:00am"},
	  {"fltNbr": 165, "LowestFare": 500.10, "time": "1:50pm", "returnDate": "2014-11-17", "returnTime": "9:00am"}
	 ]
}
]}

var beachPriceList = {"fareInfo": [
                                   {"fltNbr": 1364, "LowestFare": 100.45, "time": "5:15am", "returnDate": "2014-11-11", "returnTime": "9:00am"},
                                   {"fltNbr": 942, "LowestFare": 200.45, "time": "7:40am", "returnDate": "2014-11-12", "returnTime": "9:00am"},
                                   {"fltNbr": 942, "LowestFare": 300.45, "time": "12:00pm", "returnDate": "2014-11-13", "returnTime": "9:00am"},
                                   {"fltNbr": 942, "LowestFare": 400.45, "time": "1:50pm", "returnDate": "2014-11-14", "returnTime": "9:00am"}
                                  ]
					}

var romanticPriceList = {"fareInfo": [
                                	  {"fltNbr": 82, "LowestFare": 293.45, "time": "5:15am", "returnDate": "2014-11-11", "returnTime": "9:00am"},
                                	  {"fltNbr": 1501, "LowestFare": 400.23, "time": "7:40am", "returnDate": "2014-11-12", "returnTime": "10:00am"},
                                	  {"fltNbr": 1211, "LowestFare": 430.00, "time": "12:00pm", "returnDate": "2014-11-14", "returnTime": "9:00am"},
                                	  {"fltNbr": 165, "LowestFare": 500.10, "time": "1:50pm", "returnDate": "2014-11-17", "returnTime": "9:00am"}
                                	 ]		
					}

function getFlightPrice(destination) {
	/*
  for (var idx in priceList.price) {
	var destCode = priceList.price[idx].destinationLocation;
	if (destCode == destination) {
		return priceList.price[idx].fareInfo;
	}
  }
  */
	if (destination == 'beach') 
		return beachPriceList;
	else 
		return romanticPriceList;
}

function buildPriceList(destination) {
	console.log('inside build price list');
	var flights = getFlightPrice(destination);
	
  
  //set up string for adding <li/>
  var li = "";
  //container for $li to be added
  $.each(flights.fareInfo, function (i, flight) {
	  var flightRecord = flight.fltNbr+" "+ flight.LowestFare+" "+ flight.time;
      //add the <li> to "li" variable
      //note the use of += in the variable
      //meaning I'm adding to the existing data. not replacing it.
      //store index value in array as id of the <a> tag
      li += '<li><a href="#" id="' + flightRecord + '">' + flightRecord + '</a></li>';
  });
  //append list to ul
  $("#flights-list").append(li);



  $("#flights-panel").trigger('updatelayout');
  $("#flights-panel").trigger('create');
  $("#flights-panel").panel("open");
}

