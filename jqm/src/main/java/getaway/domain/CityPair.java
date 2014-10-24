package getaway.domain;

public class CityPair {
	private final Airport origin;
	private final Airport destination;
	
	public CityPair(Airport origin, Airport destination) {
		this.origin = origin;
		this.destination = destination;
	}

	public Airport getOrigin() {
		return origin;
	}

	public Airport getDestination() {
		return destination;
	}

}
