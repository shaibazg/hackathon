package getaway.domain;

public class Cabin {
	private final int total;
	private final int authorized;
	private final int sold;
	private final CabinType cabinType;
	
	public Cabin(CabinType cabinType, int total, int authorized, int sold) {
		this.cabinType = cabinType;
		this.total = total;
		this.authorized = authorized;
		this.sold = sold;
	}

	public int getTotal() {
		return total;
	}

	public int getAuthorized() {
		return authorized;
	}

	public int getSold() {
		return sold;
	}
	
	public int getAvailable() {
		return getTotal() - getSold();
	}

	public CabinType getCabinType() {
		return cabinType;
	}
	
	
}
