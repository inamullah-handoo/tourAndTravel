import React from 'react';

import Header from './components/Header';
import Home from './pages/home/Home';

function App() {
	return (
		<div style={{ position: 'relative' }}>
			<Header />
			<Home />
		</div>
	);
}

export default App;
