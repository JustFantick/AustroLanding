import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

import './servicesListItem.less';
import { useStore } from '../../store/store';

export const ServicesListItem = forwardRef((props, ref) => {
	const setItemAsActive = useStore(state => state.setServicesItemActive);

	return (
		<li ref={ref} className={`service-item ${props.chosen && 'active'}`}
			onClick={() => setItemAsActive(props.title)}>
			<img className='service-item__img' src={require(`../../img/${props.imgName}`)} alt={props.imgName} />
			<h5 className="service-item__title generic-title">
				{props.title}
			</h5>
			<p className="service-item__text generic-text">
				{props.text}
			</p>
		</li>
	);
});

export const MotionServicesListItem = motion(ServicesListItem);
