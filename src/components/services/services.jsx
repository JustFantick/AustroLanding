import React from 'react';
import { motion } from 'framer-motion';

import './services.less';
import ServicesList from '../servicesList/servicesList.jsx';
import { MotionServicesListItem } from '../servicesListItem/servicesListItem.jsx';
import { useStore } from '../../store/store';
import { slideLeftAnim, genAnimDuration, slideUpAnim } from '../../motionConsts/motionConsts';

export default function Services() {
	const servicesList = useStore(state => state.servicesList);

	return (
		<section className='services' id='services'>
			<div className="services__body">
				<motion.h2 className="services__title section-title"
					variants={slideLeftAnim}
					initial='hidden'
					whileInView='visible'>
					Services
				</motion.h2>

				<ServicesList>
					{servicesList.map((listItem, id) => (
						<MotionServicesListItem variants={slideUpAnim}
							initial='hidden'
							whileInView='visible'
							transition={{ duration: genAnimDuration, type: 'spring', delay: 0 }}

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
