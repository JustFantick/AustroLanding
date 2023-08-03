import React from 'react';
import { motion } from 'framer-motion';

import './stepsSection.less';
import { MotionStepItem } from '../stepItem/stepItem.jsx';
import { gridItemAnim, slideLeftAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function StepsSection() {
	return (
		<motion.section className='steps' id='steps'
			initial='hidden' whileInView='visible'>
			<motion.div variants={slideLeftAnim}
				transition={{ duration: genAnimDuration, type: 'spring' }}
				className="steps__title section-title">
				How we work
			</motion.div>
			<div className="steps__body steps-container">
				<motion.div className="steps-container__item generic-article"
					variants={gridItemAnim} custom={1}
					transition={{ duration: genAnimDuration, type: 'spring' }}>
					Your dedicated property consultant will help you view or source your ideal property that meets your specification.
				</motion.div>
				<MotionStepItem title='Documentation'
					variants={gridItemAnim} custom={2}
					transition={{ duration: genAnimDuration, type: 'spring' }} />
				<MotionStepItem title='Planning'
					variants={gridItemAnim} custom={3}
					transition={{ duration: genAnimDuration, type: 'spring' }} />
				<MotionStepItem title='Design'
					variants={gridItemAnim} custom={4}
					transition={{ duration: genAnimDuration, type: 'spring' }} />
				<MotionStepItem title='Building'
					variants={gridItemAnim} custom={5}
					transition={{ duration: genAnimDuration, type: 'spring' }} />
			</div>

		</motion.section>
	)
}
