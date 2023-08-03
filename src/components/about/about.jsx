import React from 'react';
import { motion } from 'framer-motion';

import './about.less';
import background from "../../img/map.png";
import { slideLeftAnim, slideUpAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function About() {
	return (
		<motion.section className='about' id='about'
			style={{ backgroundImage: `url(${background})` }}
			initial='hidden'
			whileInView='visible'>
			<motion.div
				variants={slideLeftAnim}
				transition={{ type: 'spring', duration: genAnimDuration, delay: 0.3 }}
				className="about__sub-column generic-article">
				We are an innovative global real estate investment management company unlike any other.
			</motion.div>
			<div className="about__main-column about-main-column">
				<motion.h2 variants={slideLeftAnim}
					transition={{ type: 'spring', duration: genAnimDuration }}
					className="about-main-column__title section-title">
					what we do
				</motion.h2>
				<div className="about-main-column__description">
					<motion.p variants={slideLeftAnim}
						transition={{ type: 'spring', delay: 0.2, duration: genAnimDuration }}
						className='generic-text'>
						We leverage our breadth of asset classes, vertically integrated services, unique business model, and in-house development and management expertise to deliver exceptional results, experiences and environments.
					</motion.p>
					<motion.p variants={slideLeftAnim}
						transition={{ type: 'spring', delay: 0.4, duration: genAnimDuration }}
						className='generic-text'>
						We craft high-quality, customized built environments that enhance the experiences of those who live and work in them, while driving value for our capital partners.
					</motion.p>
				</div>
				<div className="about-main-column__numbers">
					<motion.div
						transition={{ delay: 0.4, type: 'spring', duration: genAnimDuration }}
						variants={slideUpAnim}
						className="number-section">
						<span>17</span> years in business
					</motion.div>
					<motion.div
						transition={{ delay: 0.6, type: 'spring', duration: genAnimDuration }}
						variants={slideUpAnim}
						className="number-section">
						<span>124</span>projects
					</motion.div>
					<motion.div
						transition={{ delay: 0.8, type: 'spring', duration: genAnimDuration }}
						variants={slideUpAnim}
						className="number-section">
						<span>$160</span>total equity
					</motion.div>
				</div>

			</div>

		</motion.section>
	)
}
