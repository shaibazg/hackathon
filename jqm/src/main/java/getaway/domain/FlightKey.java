package getaway.domain;

public class FlightKey {
	private final int number;
	private final CityPair cityPair;
	
	public FlightKey(int number, CityPair cityPair) {
		this.number = number;
		this.cityPair = cityPair;
	}

	public int getNumber() {
		return number;
	}

	public CityPair getCityPair() {
		return cityPair;
	}

}
