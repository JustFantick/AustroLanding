import React from 'react';
import { useStore } from '../../store/store';

export default function SwitchButton() {
	const setDarkTheme = useStore(state => state.setDarkTheme);
	const setLightTheme = useStore(state => state.setLightTheme);
	const theme = useStore(state => state.theme);

	function changeThemeHandler(e) {
		if (theme === 'dark') {
			setLightTheme();
		} else if (theme === 'light') {
			setDarkTheme();
		}
	}

	return (
		<div className="change-theme-btn" onClick={changeThemeHandler}>
			<span className="change-theme-btn__lignt">Light</span>
			<span className="change-theme-btn__dark">Dark</span>
		</div>
	)
}
