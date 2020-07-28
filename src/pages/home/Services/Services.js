import React from 'react';

import Service from './Service';

const Services = (props) => {
	return (
		<div
			className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center .no-gutters m-0"
			style={services}
			id="services"
		>
			<Service title="Air Tickets" icon="fa-plane">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</Service>
			<Service title="Bus Tickets" icon="fa-bus-alt">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</Service>
			<Service title="Hotel Booking" icon="fa-hotel">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</Service>
			<Service title="Tour Packages" icon="fa-globe-asia">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</Service>
			<Service title="Train Tickets" icon="fa-subway">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</Service>
		</div>
	);
};

const services = {
	position: 'absolute',
	top: '-50px',
	left: '0px',
};

export default Services;
