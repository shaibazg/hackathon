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
                                   {"fltNbr": 1364, "LowestFare": 100.45, "deptTime": "5:15am", "returnDate": "2014-11-11", "returnTime": "9:00am"},
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
  $.each(flights, function (i, flight) {
	  var flightRecord = flight.fltNbr+" "+ flight.LowestFare+" "+ flight.time;
      //add the <li> to "li" variable
      //note the use of += in the variable
      //meaning I'm adding to the existing data. not replacing it.
      //store index value in array as id of the <a> tag
      li += '<li><a href="#" id="' + i + '" class="info-go">' + flightRecord + '</a></li>';
  });
  //append list to ul
  $("#flights-list").append(li).promise().done(function () {
      //wait for append to finish - thats why you use a promise()
      //done() will run after append is done
      //add the click event for the redirection to happen to #details-page
      $(this).on("click", ".info-go", function (e) {
          e.preventDefault();
          //store the information in the next page's data
          $("#details").data("info", flights[this.id]);
          //change the page # to second page. 
          //Now the URL in the address bar will read index.html#details-page
          //where #details-page is the "id" of the second page
          //we're gonna redirect to that now using changePage() method
          $.mobile.changePage("#details");
      });

      //refresh list to enhance its styling.
      //$(this).listview("refresh");
  });

  $("#flights-panel").trigger('updatelayout');
  $("#flights-panel").trigger('create');
  $("#flights-panel").panel("open");
}

