import React from 'react';
import background from "../../img/map.png";

export default function About() {
	return (
		<section className='about'
			style={{
				backgroundImage: `url(${background})`
			}}
		>
			<div className="about__sub-column generic-article">
				We are an innovative global real estate investment management company unlike any other.
			</div>
			<div className="about__main-column about-main-column">
				<h2 className="about-main-column__title section-title">what we do</h2>
				<div className="about-main-column__description">
					<p className='generic-text'>We leverage our breadth of asset classes, vertically integrated services, unique business model, and in-house development and management expertise to deliver exceptional results, experiences and environments.</p>
					<p className='generic-text'>We craft high-quality, customized built environments that enhance the experiences of those who live and work in them, while driving value for our capital partners.</p>
				</div>
				<div className="about-main-column__numbers">
					<div className="number-section"><span>17</span> years in business</div>
					<div className="number-section"><span>124</span>projects</div>
					<div className="number-section"><span>$160</span>total equity</div>
				</div>


			</div>

		</section>
	)
}
