package getaway.domain;

public class Flight {
	private final FlightKey key;
	private final Schedule schedule;
	private final FlightConfiguration configuration;
	private final Carrier carrier;
	
	private Flight(Builder builder) {
		this.key = builder.key;
		this.schedule = builder.schedule;
		this.configuration = builder.configuration;
		this.carrier = builder.carrier;
	}
	
	public static class Builder {
		private final FlightKey key;
		private Schedule schedule;
		private FlightConfiguration configuration;
		private Carrier carrier;
		
		public Builder(FlightKey key) {
			this.key = key;
		}
		
		public Builder schedule(Schedule schedule) {
			this.schedule = schedule;
			return this;
		}
		
		public Builder configuration(FlightConfiguration configuration) {
			this.configuration = configuration;
			return this;
		}
		
		public Builder carrier(Carrier carrier) {
			this.carrier = carrier;
			return this;
		}
		
		public Flight build() {
			return new Flight(this);
		}
		
	}

	public FlightKey getKey() {
		return key;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public FlightConfiguration getConfiguration() {
		return configuration;
	}

	public Carrier getCarrier() {
		return carrier;
	}
	

}
