package getaway.domain;

public enum Carrier {
	AA("AA", "American Airlines");
	
	private String code;
	private String name;
	
	Carrier(String code, String name) {
		this.code = code;
		this.name = name;
	}
	
	public String code() {
		return this.code;
	}
	
	public String carrierName() {
		return this.name;
	}
}
