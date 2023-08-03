import React from 'react';
import { motion } from 'framer-motion';
import './contactsSection.less';

import Form from '../form/form.jsx';
import { slideLeftAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function ContactsSection() {
	return (
		<motion.section className='contacts-section' id='contacts'
			initial='hidden' whileInView='visible'>
			<motion.div className="contacts-section__title section-title"
				variants={slideLeftAnim}
				transition={{ duration: genAnimDuration, type: 'spring' }}>
				Work with us
			</motion.div>
			<div className="contacts-section__body">
				<div className='contacts-section__article'>
					<motion.p className="generic-article"
						variants={slideLeftAnim}
						transition={{ duration: genAnimDuration, type: 'spring', delay: genAnimDuration / 2 }}>
						Carrer de la Ciutat de
						Granada, 120, 08018
						Barcelona
					</motion.p>
				</div>
				<div className='contacts-section__from-container'>
					<Form />
				</div>
			</div>

		</motion.section>
	)
}
