import React, { useEffect } from 'react';
import './projectsList.less';
import { useStore } from '../../store/store';
import ProjectsListItem from '../projectsListItem/projectsListItem.jsx';

export default function ProjectsList() {
	const projectsList = useStore(state => state.projectsList);

	return (
		<ul className='projects-list'>
			{projectsList && projectsList.map((listItem, id) => (
				listItem.empty === true ?
					<li key={id}></li>
					:
					<ProjectsListItem key={id}
						imgName={listItem.imgName}
						title={listItem.title}
					/>
			))}
		</ul>
	)
}
