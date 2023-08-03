import React, { useEffect } from 'react';
import { delay, motion } from 'framer-motion';

import './projectsList.less';
import { useStore } from '../../store/store';
import { MotionProjectsListItem } from '../projectsListItem/projectsListItem.jsx';
import { gridItemAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function ProjectsList() {
	const projectsList = useStore(state => state.projectsList);

	return (
		<motion.ul className='projects-list'
			initial='hidden'
			whileInView='visible'
		>
			{projectsList && projectsList.map((listItem, id) => (
				listItem.empty === true ?
					<li key={id}></li>
					:
					<MotionProjectsListItem key={id}
						imgName={listItem.imgName}
						title={listItem.title}
						variants={gridItemAnim}
						custom={id}
						transition={{ duration: genAnimDuration, type: 'spring' }}
					/>
			))}
		</motion.ul>
	)
}
