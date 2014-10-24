package getaway.domain;

public class Airport {
	private final String code;
	private final String name;


	private double latitude;
	private double longitude;
	
	private Address address;
	
	public Airport(String code, String name) {
		this.code = code;
		this.name = name;
	}
	
	public Airport(String code, String name, double latitude, double longitude) {
		this(code, name);
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	public Airport(String code, String name, double latitude, double longitude, String city, String state) {
		this(code, name, latitude, longitude);
		address = new Address(city, state);
	}
 	

	public String getCode() {
		return code;
	}

	public String getName() {
		return name;
	}
	
	public double getLatitude() {
		return latitude;
	}

	public Address getAddress() {
		return address;
	}

	public double getLongitude() {
		return longitude;
	}

	
	private static class Address {
		private String city;
		private String state;
		
		public Address(String city, String state) {
			this.city = city;
			this.state = state;
		}
		
		public String getCity() {
			return city;
		}
		
		public String getState() {
			return state;
		}
	}

}
