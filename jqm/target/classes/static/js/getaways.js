$(document).on('pageinit', '#index', function() {
		console.log("inside page init of index");
        $(document).on('click', '#search', function() { // catch the form's submit event
        	  console.log('inside search submit');	
              $.ajax({url: '/availability',
                data: $('#searchForm').serialize(),
                type: 'GET',                  
                async: 'true',
                dataType: 'json',
                beforeSend: function() {
                	console.log('inside before send');
                    $.mobile.loading('show');
                },
                complete: function() {
                	console.log('inside complete')
                    $.mobile.loading('hide');
                },
                success: function (flights) {
                	console.log('the flight data ' + JSON.stringify(flights));
                	console.log('inside successful result' + flights[0].key.cityPair.destination.code);
                	populateFlights(flights);
                    $.mobile.changePage("#list");                        
                },
                error: function (request,error) {
                	console.log('inside error ' + error);
                    alert('Network error has occurred please try again!');
                }
              });                          
          return false; // cancel original event to prevent form submitting
        });   
});


$(document).on("pagecreate","#index", function() {
	$("#index").bgswitcher({
		images: ["./images/lax.jpg", "./images/sfo.jpg" ,"./images/nyc.jpg", "./images/dca.jpg", "./images/mia.jpg", "./images/las.jpg"],
		loop : true,
		interval : 5000,
		duration : 1000,
		easing : 'swing',
		effect : 'fade'
	});
    
});



function populateFlights(flights) {


  //set up string for adding <li/>
  var li = "";
  //container for $li to be added
  $.each(flights, function (i, flight) {
      //add the <li> to "li" variable
      //note the use of += in the variable
      //meaning I'm adding to the existing data. not replacing it.
      //store index value in array as id of the <a> tag
      li += '<li><a href="#" id="' + i + '" class="info-go">' + flight.key.cityPair.destination.code + '</a></li>';
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
}

//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details", function () {
  //get from data - you put this here when the "a" wa clicked in the previous page
  var info = $(this).data("info");
  //string to put HTML in
  var info_view = "";
  //use for..in to iterate through object
  for (var key in info) {
      //Im using grid layout here.
      //use any kind of layout you want.
      //key is the key of the property in the object 
      //if obj = {name: 'k'}
      //key = name, value = k
      info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 75%">' + info[key] + '</div></div></div>';
  }
  //add this to html
  $(this).find("[data-role=content]").html(info_view);
});