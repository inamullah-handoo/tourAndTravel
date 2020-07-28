import React from 'react';

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-translucent py-0">
			<div className="container">
				<a className="navbar-brand" href="/">
					Tour and Travels
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#skNavbar"
					aria-controls="skNavbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="skNavbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								Home
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
