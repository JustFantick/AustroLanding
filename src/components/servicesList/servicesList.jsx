import React from 'react';
import './servicesList.less';

export default function ServicesList({ children }) {
	return (
		<ul className="services-list">
			{children}
		</ul>
	)
}
