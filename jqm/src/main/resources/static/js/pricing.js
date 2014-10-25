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

      // li += '<li><a href="#" id="' + flightRecord + '">' + flightRecord + '</a></li>';
      // li += '<li><a href="#" id="' + flightRecord + '">' + flightRecord + '</a></li>';

      var item = "<li><div class='leg'>"
        +   "<div class='depDetails'>"
            +   "<div class='departure'>" + flight.time + "<span class='separator'>→</span>"+(flight.time+2)+"</div>"
        +   "</div>"
        +   "<div class='icon'><img style='height:28px;width:28px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAADj0lEQVRYw82YW0gUURiAtyIKC5+sh4igqz4I0YWiQKMHwUINTMs0SEvFlAhKyDDIMIuM1Ehr84aXtbxUmLcuLnnJ+z1TMyN3zTaz3Exh3chTdv5htTNnz+zVHXz4XmbO/P83/8w585+RzMzMSAzQgUFmcM5IPLMwdNKeTKz5PYlOFWxHQflb52j9VEnLdbkkSyTmYKkcMEgm98leh3DAOTzSHVjVixNLLpdMXPz2Hk8OkLVfZwnuFkMujEyq1ozoyQETWjUtlyqGHNBPJob3jpa7WH6IVb1AMeQSyaSZzZeZ1Xs32kLLVYkh50MmVf7oY8r5y7awqhdja7nlmFEy6ZGc9UzBpz1SWk6LcbJGzgsTj5HqCIaA1MAsMmly3Xmm3P67S9Gv6SlaMMEaOaHVXo5x1A0MIc/B+8WSA+LkJ1ixfOZbDqjG2GEcMBrynFfGakHBofF+Ok6JLeSASt3gIvL4NXmgoBwsN4w4URbJpdRHoptVoRylvWmswO91zB2rU5QIygHygYd0DAWmzQDtOqAIZzE7OLnQol28wM1Dz412IH/+IuR2f4WgnHuqPTKzo9GDk3s9WKw368Y0X4xeHFt53GD1pA0XrJeD6e8mteMFDshz4tokQxfTN8Xi888P1skB0RXeeoE9M1ahY7LNyC93owCbjMrB4w0p3MlNEkOcLNjGcenZYTQyqeTL1StKjSYSC3hqPLlOVfWCkQN4cvGvQswO4Jq8yCZimS0xfDl6xYcZ26Wq4bqQj2PdeijUvaisL8NoIuieG5XlqEFZxr06szQqKyjKOSA2b0KwHikcMzabhHq7Wa689Ld+KYFOlgya33nLpIthgyMkti9lMdJOa6yXi3nhhyKeuKDTj/aipNozJl34RlVrsGqFXYnWiKlhF2fKh78F40zvxBJqIgTFjuZsYMWJxXgQHKA4qMPZ1K4EOuCdmJWY74b2sCQ9XxvpOE3z3TKN6vYPMCaIPDeo7hEUiyrzZMUKtlQuHPMAU4Opw9zG+GLWEAPTyWRpTdGCcow9bKYtNzjLMCoyIXxvWWJ57TdYVdtjSzlfMtnw+ABTDN5BS/6bWCuXxFt48aeFJQdLCyXWIcammteeQ1tDi0WWuLOqFmZruXAyIXTHrKqNT32jxXLE+JGTRyZ93H1HTyy79Sqraq5iyA2RSb2z1i6Yn4cOZNIJ7RgKkDn+B3erbcNyWqwbs2S+5P4BOBRlVuj7kZ0AAAAASUVORK5CYII='></div>"
        +   "<div class='arDetails'>"
            +   "<div class='arrival'>" + flight.returnDate + " " + flight.returnTime + "</div>"
            +   "<div class='destination'>" + "asd2" + "</div>"
        +   "</div>"
        +   "</div></li>";

      li += item;
  });
  //append list to ul
  $("#flights-list").append(li);



  $("#flights-panel").trigger('updatelayout');
  $("#flights-panel").trigger('create');
  $("#flights-panel").panel("open");
}

