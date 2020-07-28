import React from 'react';

import bg from '../../../assets/images/bg.jpg';
import Navbar from '../../../components/Navbar';
import Qoute from './Qoute';

const Main = () => {
	return (
		<div style={main} className="vh-100">
			<Navbar />
			<div className="col-md-6 m-md-4 text-justify mt-md-4">
				<Qoute />
			</div>
		</div>
	);
};

const main = {
	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${bg})`,
	backgroundSize: 'cover',
};

export default Main;
