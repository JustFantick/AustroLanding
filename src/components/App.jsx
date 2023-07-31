import React, { useState } from 'react';
import StartScreen from './startScreen/startScreen.jsx';
import { useStore } from '../store/store.js';

import About from './about/about.jsx';
import Services from './services/services.jsx';
import Projects from './projects/projects.jsx';
import StepsSection from './stepsSection/stepsSection.jsx';
import Team from './team/team.jsx';
import VideoSection from './videoSection/videoSection.jsx';

export default function App() {
	const theme = useStore(state => state.theme);

	return (
		<div className={`wrapper ${theme}`}>
			<StartScreen />
			<About />
			<Services />
			<Projects />
			<StepsSection />
			<Team />
			<VideoSection />
		</div>
	)
}