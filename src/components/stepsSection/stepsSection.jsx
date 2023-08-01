import React from 'react';
import './stepsSection.less';

import StepItem from '../stepItem/stepItem.jsx';

export default function StepsSection() {
	return (
		<section className='steps' id='steps'>
			<div className="steps__title section-title">How we work</div>
			<div className="steps__body steps-container">
				<div className="steps-container__item generic-article">
					Your dedicated property consultant will help you view or source your ideal property that meets your specification.
				</div>
				<StepItem title='Documentation' />
				<StepItem title='Planning' />
				<StepItem title='Design' />
				<StepItem title='Building' />

			</div>

		</section>
	)
}
