package getaway.domain;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FlightConfiguration {
	private Map<CabinType, Cabin> cabins = new HashMap<CabinType, Cabin>();
	
	
	public FlightConfiguration(Cabin cabin) {
		cabins.put(cabin.getCabinType(), cabin);
	}
	
	public FlightConfiguration(List<Cabin> cabins) {
		for (Cabin cabin : cabins) {
			this.cabins.put(cabin.getCabinType(), cabin);
		}
	}
	
	public Cabin getFirst() {
		return getCabin(CabinType.FIRST);
	}
	
	public Cabin getBusiness() {
		return getCabin(CabinType.BUSINESS);
	}
	
	public Cabin getCoach() {
		return getCabin(CabinType.COACH);
	}
	
	public Cabin getCabin(CabinType cabinType) {
		return cabins.get(cabinType);
	}
	
}
