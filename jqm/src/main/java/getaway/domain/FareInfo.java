package getaway.domain;

public class FareInfo {
	private double baseFare;
	private double taxes;
	
	public FareInfo(double baseFare, double taxes) {
		this.baseFare = baseFare;
		this.taxes = taxes;
	}
	
	public double baseFare() {
		return baseFare;
	}
	
	public double taxes() {
		return taxes;
	}
}
