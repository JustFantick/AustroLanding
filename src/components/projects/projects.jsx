import React from 'react';
import './projects.less';
import ProjectsList from '../projectsList/projectsList.jsx';

export default function Projects() {
	return (
		<section className='projects'>
			<h2 className="projects__title section-title">Projects</h2>
			<ProjectsList></ProjectsList>

		</section>
	)
}
