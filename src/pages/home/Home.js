import React from 'react';

import Main from './Main/Main';
import Services from './Services/Services';

const Home = (props) => {
	return (
		<div>
			<Main />
			<div className="container" style={{ position: 'relative' }}>
				<Services />
			</div>
		</div>
	);
};

export default Home;
