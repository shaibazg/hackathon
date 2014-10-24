package getaway.controller;

import getaway.domain.Airport;
import getaway.domain.Availability;
import getaway.domain.DestinationType;
import getaway.domain.Flight;
import getaway.service.DestinationsService;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@Controller
public class DestinationsController {
	
	@Autowired DestinationsService destinationService;
	
	@RequestMapping(value = "/search", method = RequestMethod.GET, produces="application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Flight> search(@RequestParam String airport, 
			@RequestParam @DateTimeFormat (iso = ISO.DATE) Date departureDate, @RequestParam String type) {
		Airport originAirport = new Airport(airport, airport);
		return destinationService.retrieveFlights(originAirport, departureDate, DestinationType.BEACH);
	}
	
	
	@RequestMapping(value = "/availability", method = RequestMethod.GET, produces="application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Availability> availability(@RequestParam String airport, 
			@RequestParam @DateTimeFormat (iso = ISO.DATE) Date departureDate, @RequestParam String type) {
		Airport originAirport = new Airport(airport, airport);
		return destinationService.retrieveAvailability(originAirport, departureDate, DestinationType.BEACH);
	}
}
