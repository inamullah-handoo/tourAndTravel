import React from 'react';

const Qoute = () => {
	return (
		<div className="pt-md-5">
			<blockquote
				className="blockquote text-white mt-5 p-5 p-md-0"
				style={main}
			>
				<p className="mb-0 font-weight-bold display-4">
					THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY A
					PAGE
				</p>
				<footer className="blockquote-footer text-white-50">
					SAINT AUGUSTINE
				</footer>
			</blockquote>
		</div>
	);
};

const main = {
	fontFamily: "'Indie Flower', cursive",
};

export default Qoute;
