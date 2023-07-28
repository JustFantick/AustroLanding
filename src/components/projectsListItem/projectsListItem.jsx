import React from 'react';
import './projectsListItem.less';

export default function ProjectsListItem(props) {
	return (
		<li className='projects-list-item'>
			<img className='projects-list-item__img' src={require(`../../img/${props.imgName}`)} alt={props.imgName} />
			<div className="projects-list-item__caption">
				<h5 className='generic-title'>{props.title}</h5>

			</div>

		</li>
	)
}
