package getaway.domain;

import java.util.Date;

public class Schedule {
	private final Date departure;
	private final Date arrival;
	
	public Schedule(Date departure, Date arrival) {
		this.departure = departure;
		this.arrival = arrival;
	}

	public Date getDeparture() {
		return departure;
	}

	public Date getArrival() {
		return arrival;
	}
}
