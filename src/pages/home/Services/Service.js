import React from 'react';

const Service = (props) => {
	let classes = ['fa-4x', 'fas'];
	classes.push(props.icon);
	let icon = <i className={classes.join(' ')}></i>;
	// let text = '';
	// props.children.forEach((child) => {
	// 	if (child.type === 'i') {
	// 		icon = <i className={child.props.className}></i>;
	// 	} else {
	// 		text = child.props.children;
	// 	}
	// });
	return (
		<div className="col mb-5">
			<div className="card text-center">
				<div className="card-header border-0 bg-transparent">
					{icon}
				</div>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.children}</p>
				</div>
			</div>
		</div>
	);
};

export default Service;
