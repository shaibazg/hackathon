var beachPriceList = {"fareInfo": [
                                   {"fltNbr": 1364, "LowestFare": 590, "time": "5:15 am", "returnDate": "2014-11-11", "returnTime": "9:20 am"},
                                   {"fltNbr": 942, "LowestFare": 550, "time": "7:40 am", "returnDate": "2014-11-12", "returnTime": "10:45 am"},
                                   {"fltNbr": 206, "LowestFare": 715, "time": "12:00 pm", "returnDate": "2014-11-13", "returnTime": "1:45 pm"},
                                   {"fltNbr": 60, "LowestFare": 650, "time": "1:50 pm", "returnDate": "2014-11-14", "returnTime": "6:30 pm"}
                                  ]
					}

var romanticPriceList = {"fareInfo": [
                                	  {"fltNbr": 1108, "LowestFare": 493, "time": "7:40 am", "returnDate": "2014-11-11", "returnTime": "6:00 am"},
                                	  {"fltNbr": 1501, "LowestFare": 643, "time": "8:20 am", "returnDate": "2014-11-12", "returnTime": "7:45 am"},
                                	  {"fltNbr": 1120, "LowestFare": 701, "time": "11:25 pm", "returnDate": "2014-11-14", "returnTime": "9:25 am"},
                                	  {"fltNbr": 1138, "LowestFare": 760, "time": "5:50 pm", "returnDate": "2014-11-17", "returnTime": "4:29 pm"}
                                	 ]		
					}

function getFlightPrice(destination) {
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
	  var flightRecord = flight.fltNbr+" "+ flight.LowestFare+" "+ flight.time + " " + flight.returnDate + " " + flight.returnTime;
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

