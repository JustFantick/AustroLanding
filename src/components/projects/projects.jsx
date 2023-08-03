import React from 'react';
import { motion } from 'framer-motion';

import './projects.less';
import ProjectsList from '../projectsList/projectsList.jsx';
import { slideLeftAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function Projects() {
	return (
		<section className='projects' id='projects'>
			<motion.h2 className="projects__title section-title"
				initial='hidden'
				whileInView='visible'
				variants={slideLeftAnim}
				transition={{ duration: genAnimDuration, type: 'spring' }}
			>
				Projects
			</motion.h2>
			<ProjectsList />

		</section>
	)
}
