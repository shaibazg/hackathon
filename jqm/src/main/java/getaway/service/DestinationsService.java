package getaway.service;

import getaway.domain.Airport;
import getaway.domain.Availability;
import getaway.domain.DestinationType;
import getaway.domain.Flight;

import java.util.Date;
import java.util.List;



public interface DestinationsService {
	
	public List<Flight> retrieveFlights(Airport originAirport, Date departureDate, DestinationType destType);
	
	public List<Availability> retrieveAvailability(Airport originAirport, Date departureDate, DestinationType destType); 
	
}
