import React, { useState } from 'react';
import StartScreen from './startScreen/startScreen.jsx';

export default function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="wrapper">
			<StartScreen />
		</div>
	)
}