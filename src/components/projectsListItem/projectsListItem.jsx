import React from 'react';
import './projectsListItem.less';

export default function ProjectsListItem(props) {
	return (
		<li className='projects-list-item'>
			<a href="#" className='projects-list-item__link-wrapper'>
				<img className='projects-list-item__img' src={require(`../../img/${props.imgName}`)} alt={props.imgName} />
				<div className="projects-list-item__caption">
					<h5 className='generic-title'>{props.title}</h5>
					<svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
						<path d="M9 9.5V12.5H21.885L7.5 26.885L9.615 29L24 14.615V27.5H27V9.5H9Z" fill="#367848" />
					</svg>
				</div>
			</a>

		</li>
	)
}
