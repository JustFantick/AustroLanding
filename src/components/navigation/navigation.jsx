import React from 'react';
import { Link } from 'react-scroll';
import './navigation.less';

export default function Navigation(props) {
	const scrollDuration = 750;
	return (
		<nav className={`nav ${props.extraClasses}`}>
			<Link className="nav__item" to="about" smooth={true} duration={scrollDuration}>
				about
			</Link>
			<Link className="nav__item" to="services" smooth={true} duration={scrollDuration}>
				services
			</Link>
			<Link className="nav__item" to="projects" smooth={true} duration={scrollDuration}>
				projects
			</Link>
			<Link className="nav__item" to="steps" smooth={true} duration={scrollDuration}>
				steps
			</Link>
			<Link className="nav__item" to="team" smooth={true} duration={scrollDuration}>
				team
			</Link>
			<Link className="nav__item" to="contacts" smooth={true} duration={scrollDuration}>
				contacts
			</Link>
		</nav>)
}
