var beachPriceList = [
    {

            "price": 390,
            "outbound": {"fltNbr": 1364, "date": "2014-11-11", "time": "05:15 am", "arrivalTime": "06:25 am", "duration": "1 hr 10 min"},
            "inbound": {"fltNbr": 124, "date": "2014-11-15", "time": "09:20 am", "arrivalTime": "10:30 am", "duration": "1 hr 20 min"}

    },
    {

            "price": 450,
            "outbound": {"fltNbr": 942, "date": "2014-11-11", "time": "07:40 am", "arrivalTime": "08:50 am", "duration": "1 hr 10 min"},
            "inbound": {"fltNbr": 533, "date": "2014-11-15", "time": "10:45 am", "arrivalTime": "11:55 pm",  "duration": "1 hr 20 min"}

    },
    {

            "price": 490,
            "outbound": {"fltNbr": 206, "date": "2014-11-11", "time": "12:00 pm", "arrivalTime": "01:10 pm", "duration": "1 hr 10 min"},
            "inbound": {"fltNbr": 210, "date": "2014-11-15", "time": "01:45 pm", "arrivalTime": "03:05 pm", "duration": "1 hr 20 min"}

    }
]

var romanticPriceList = [
    {
        "price": 393,
        "outbound": {"fltNbr": 1108, "date": "2014-11-11", "time": "07:15 am", "arrivalTime": "09:15 am", "duration": "2 hrs"},
        "inbound": {"fltNbr": 1364, "date": "2014-11-15", "time": "06:20 am", "arrivalTime": "08:30 am", "duration": "2 hr 10 min"}

    },
    {
        "price": 401,
        "outbound": {"fltNbr": 1501, "date": "2014-11-11", "time": "08:40 am", "arrivalTime": "11:40 am", "duration": "2 hrs"},
        "inbound": {"fltNbr": 533, "date": "2014-11-15", "time": "07:45 am", "arrivalTime": "10:00 am", "duration": "2 hr 10 min"}
    },
    {
        "price": 460,
        "outbound": {"fltNbr": 1120, "date": "2014-11-11", "time": "11:45 pm", "arrivalTime": "03:00 pm", "duration": "2 hrs"},
        "inbound": {"fltNbr": 1138, "date": "2014-11-15", "time": "09:45 am", "arrivalTime": "10:00 am", "duration": "2 hr 10 min"}
    }
]

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
    $.each(flights, function (i, flight) {
        var flightRecord = flight.price + " " + flight.outbound.fltNbr+" "+ flight.outbound.date + " " + flight.outbound.time + " " + flight.outbound.arrivalTime + " " + flight.outbound.duration + "\b" +
            flight.inbound.fltNbr+" "+ flight.inbound.date + " " + flight.inbound.time + " " + flight.inbound.arrivalTime + " " + flight.inbound.duration;
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        // li += '<li><a href="#" id="' + flightRecord + '">' + flightRecord + '</a></li>';

        var html = '<li><div class="singleleg">'
          //+ '<div class="price">'+flight.price+'</div>'
          // + '<div class="timeAirportBlock timeAirportBlockDeparture">'
          // +   '07:00'
          // + '</div>'
          + '<div class="flightnumber">'+flight.outbound.fltNbr+'</div>'
          + '<div class="timeAirportBlock timeAirportBlockDeparture">'
          +   flight.outbound.time
          + '</div>'
          + '<div class="odSeparator">→</div>'
          + '<div class="timeAirportArrival">'
          +   flight.outbound.arrivalTime
          + '</div>'
          + '<div class="duration">'
          +   flight.outbound.duration
          + '</div>'
          + '<br/>'
          + '<div class="flightnumber">'+flight.inbound.fltNbr+'</div>'
          + '<div class="timeAirportBlock timeAirportBlockDeparture">'
          +   flight.inbound.time
          + '</div>'
          + '<div class="odSeparator">→</div>'
          + '<div class="timeAirportArrival">'
          +   flight.inbound.arrivalTime
          + '</div>'
          + '<div class="duration">'
          +   flight.inbound.duration
          + '</div>'
          + '</div></li>';

        li += html;

    });
    //append list to ul
    $("#flights-list").append(li);



    $("#flights-panel").trigger('updatelayout');
    $("#flights-panel").trigger('create');
    $("#flights-panel").panel("open");
}
