import React from 'react';
import { motion } from 'framer-motion';

import './videoSection.less';
import { MotionGreenSircleBtn } from '../greenSircleBtn/greenSircleBtn.jsx';
import { slideRightAnim, genAnimDuration, scaleItem } from '../../motionConsts/motionConsts';

export default function VideoSection() {
	return (
		<motion.section className='video-section'
			initial='hidden' whileInView='visible'>
			<div className="video-section__body">
				<motion.div className="video-section__title"
					variants={slideRightAnim}
					transition={{ duration: genAnimDuration, type: 'spring' }}>
					Over the years we’ve thought a lot about how we balance being good humans with doing good work and running a good business
				</motion.div>

				<div className="video-section__video">
					<img src={require('../../img/video.png')} alt="video.png" />

					<MotionGreenSircleBtn text='play'
						variants={scaleItem}
						transition={{ duration: genAnimDuration * 1.5, type: 'spring', delay: 0.75 }}
					/>
				</div>

			</div>

		</motion.section>
	)
}
