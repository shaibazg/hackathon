package getaway.domain;

public class Availability {
	private int numberOfFlights;
	private CityPair cityPair;
	private int totalSeats;
	private int available;
	
	public Availability(int numberOfFlights, CityPair cityPair, int totalSeats, int available) {
		this.numberOfFlights = numberOfFlights;
		this.cityPair = cityPair;
		this.totalSeats = totalSeats;
		this.available = available;
	}

	public int getNumberOfFlights() {
		return numberOfFlights;
	}

	public CityPair getCityPair() {
		return cityPair;
	}

	public int getTotalSeats() {
		return totalSeats;
	}

	public int getAvailable() {
		return available;
	}

}
