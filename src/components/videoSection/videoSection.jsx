import React from 'react';
import './videoSection.less';
import GreenSircleBtn from '../greenSircleBtn/greenSircleBtn.jsx';

export default function VideoSection() {
	return (
		<section className='video-section'>
			<div className="video-section__body">
				<div className="video-section__title">
					Over the years we’ve thought a lot about how we balance being good humans with doing good work and running a good business
				</div>

				<div className="video-section__video">
					<img src={require('../../img/video.png')} alt="video.png" />

					<GreenSircleBtn text='play' />
				</div>

			</div>

		</section>
	)
}
