package getaway.domain;

import java.util.Date;

public class SearchRequest {
	private String airport;
	private Date departureDate;
	private String type;
	
	public SearchRequest (String airport, Date departureDate, String type) {
		this.type = type;
		this.departureDate = departureDate;
		this.airport = airport;
	}

	public String getAirport() {
		return airport;
	}

	public Date getDepartureDate() {
		return departureDate;
	}

	public String getType() {
		return type;
	}
	
	
	
	

}
