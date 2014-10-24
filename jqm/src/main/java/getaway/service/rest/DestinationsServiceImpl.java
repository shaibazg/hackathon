package getaway.service.rest;

import getaway.domain.Airport;
import getaway.domain.Availability;
import getaway.domain.Cabin;
import getaway.domain.CabinType;
import getaway.domain.Carrier;
import getaway.domain.CityPair;
import getaway.domain.DestinationType;
import getaway.domain.Flight;
import getaway.domain.FlightConfiguration;
import getaway.domain.FlightKey;
import getaway.service.DestinationsService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class DestinationsServiceImpl implements DestinationsService {

	@Override
	public List<Flight> retrieveFlights(Airport originAirport,
			Date departureDate, DestinationType destType) {
		List<Flight> flights = new ArrayList<Flight>();
		Airport origin = new Airport("JFK" , "John F Kennedy");
		Airport dest1 = new Airport("LAX" , "Los Angeles International");
		Airport dest2 = new Airport("DFW" , "Dallas Fort/Worth International");
		Airport dest3 = new Airport("MIA" , "Miami International");
		CityPair pair1 = new CityPair(origin, dest1);
		CityPair pair2 = new CityPair(origin, dest2);
		CityPair pair3 = new CityPair(origin, dest3);
		
		FlightKey key1 = new FlightKey(1, pair1);
		FlightKey key2 = new FlightKey(2, pair2);
		FlightKey key3 = new FlightKey(3, pair3);
		
		Cabin first = new Cabin(CabinType.FIRST, 10, 10, 4);
		Cabin business = new Cabin(CabinType.BUSINESS, 20, 20, 20);
		Cabin coach = new Cabin(CabinType.COACH, 72, 78, 78);
		List<Cabin> cabins = new ArrayList<Cabin>();
		cabins.add(first); cabins.add(coach); cabins.add(business);
		FlightConfiguration configuration = new FlightConfiguration(cabins);
//		FlightSchedule schedule = new FlightSchedule()
		Flight flight1 = new Flight.Builder(key1).configuration(configuration).carrier(Carrier.AA).build();
		Flight flight2 = new Flight.Builder(key2).configuration(configuration).carrier(Carrier.AA).build();
		Flight flight3 = new Flight.Builder(key3).configuration(configuration).carrier(Carrier.AA).build();
		flights.add(flight1);flights.add(flight2);flights.add(flight3);
		return flights;
	}
	
	
	@Override
	public List<Availability> retrieveAvailability(Airport originAirport,
			Date departureDate, DestinationType destType) {
		Airport origin = new Airport("DFW", "Dallas Ft. Worth International");
		List<Availability> availabilites = new ArrayList<Availability>();
		List<CityPair> cityPairs = null;
		if (DestinationType.BEACH.equals(destType)) {
			//cityPairs = buildBeachCityPairs(origin);
			cityPairs = buildRomanticCityPairs(origin);
		} else {
			cityPairs = buildRomanticCityPairs(origin);
		}
		for (CityPair cityPair: cityPairs) {
			availabilites.add(new Availability(10, cityPair, 600, 50));
		}
		return availabilites;
	}
	
	
	private List<CityPair> buildBeachCityPairs(Airport origin) {
		List<Airport> destAirports = buildBeachDestinationAirports();
		List<CityPair> cityPairs = new ArrayList<CityPair>();
		for (Airport dest: destAirports) {
			cityPairs.add(new CityPair(origin,dest));
		}
		return cityPairs;
	}
	
	
	private List<CityPair> buildRomanticCityPairs(Airport origin) {
		List<Airport> destAirports = buildRomanticDestinationAirports();
		List<CityPair> cityPairs = new ArrayList<CityPair>();
		for (Airport dest: destAirports) {
			cityPairs.add(new CityPair(origin,dest));
		}
		return cityPairs;
	}

	
	private List<Airport> buildBeachDestinationAirports() {
		Airport mia = new Airport("MIA", "Miami Intl", 25.79325, -80.290556, "Miami", "FL");
		Airport lax = new Airport("LAX", "Los Angeles Intl", 33.942536,-118.408075, "Los Angeles", "CA");
		Airport cun = new Airport("CUN", "Cancun Intl", 21.036528,-86.877083, "Cancun", "Quintana Roo");
		Airport sjc = new Airport("SJC", "San Jose Intl", 37.3626,-121.929022, "San Jose", "CA");
		Airport san = new Airport("SAN", "San Diego Intl", 32.5722722,-116.9801611, "San Diego", "CA");
		return Arrays.asList(new Airport[]{mia, lax, cun, sjc, san});
		
	}
	
	private List<Airport> buildRomanticDestinationAirports() {
		Airport sfo = new Airport("SFO", "San Francisco Intl", 37.618972,-122.374889, "San Francisco", "CA");
		Airport sba = new Airport("SBA", "Santa Barbara Intl", 34.426211,-119.840372, "Santa Barbara", "CA");
		Airport saf = new Airport("SAF", "Santa Fe Municipal", 35.617108,-106.089422, "Santa Fe", "NM");
		Airport sat = new Airport("SAT", "San Antonio", 29.533694,-98.469778, "San Antonio", "TX");
		Airport lga = new Airport("LGA", "La Guardia", 40.777245,-73.872608, "New York", "NY");
		return Arrays.asList(new Airport[]{sfo,sba,saf,sat,lga});
	}
	
}
