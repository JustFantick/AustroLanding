import React, { useState } from 'react';
import StartScreen from './startScreen/startScreen.jsx';
import { useStore } from '../store/store.js';

export default function App() {
	const theme = useStore(state => state.theme);

	return (
		<div className={`wrapper ${theme}`}>
			<StartScreen />
		</div>
	)
}