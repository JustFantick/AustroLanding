import React from 'react';
import './servicesListItem.less';
import { useStore } from '../../store/store';

export default function ServicesListItem(props) {
	const setItemAsActive = useStore(state => state.setServicesItemActive);

	return (
		<li className={`service-item ${props.chosen && 'active'}`}
			onClick={() => setItemAsActive(props.title)}
		>
			<img className='service-item__img' src={require(`../../img/${props.imgName}`)} alt={props.imgName} />
			<h5 className="service-item__title generic-title">
				{props.title}
			</h5>
			<p className="service-item__text generic-text">
				{props.text}
			</p>
		</li>
	)
}
