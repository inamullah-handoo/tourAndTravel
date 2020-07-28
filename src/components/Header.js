import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="row w-100 text-center">
				<div className="col-sm">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook fa-lg fa-fw"></i>
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram-square fa-lg fa-fw"></i>
					</a>
				</div>
				<div className="col-sm row justify-content-around ml-0">
					<a href="mailto:email@email.com">
						<i className="fas fa-at fa-lg fa-fw"></i>email@email.com
					</a>
					<a href="tel:+911234567890">
						<i className="fas fa-phone-alt fa-lg fa-fw"></i>
						+91 1234567890
					</a>
					<a
						href="https://wa.me/+911234567890"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-whatsapp fa-lg fa-fw"></i>
						+91 1234567890
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
