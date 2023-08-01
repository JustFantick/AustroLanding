import React from 'react';
import './services.less';

import ServicesList from '../servicesList/servicesList.jsx';
import ServicesListItem from '../servicesListItem/servicesListItem.jsx';
import { useStore } from '../../store/store';

export default function Services() {
	const servicesList = useStore(state => state.servicesList);

	return (
		<section className='services' id='services'>
			<div className="services__body">
				<h2 className="services__title section-title">Services</h2>

				<ServicesList>
					{servicesList.map((listItem, id) => (
						<ServicesListItem
							key={id}
							chosen={listItem.chosen}
							title={listItem.title}
							text={listItem.text}
							imgName={listItem.imgName}
						/>
					))}
				</ServicesList>
			</div>

		</section>
	)
}
