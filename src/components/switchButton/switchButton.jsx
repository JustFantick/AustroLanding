import React from 'react'

export default function SwitchButton() {
	function changeThemeHandler(e) {
		const body = document.querySelector('body');
		if (body.classList.contains('light')) {
			body.classList.remove('light');
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
			body.classList.add('light');
		}
	}
	return (
		<div className="change-theme-btn" onClick={changeThemeHandler}>
			<span className="change-theme-btn__lignt">Light</span>
			<span className="change-theme-btn__dark">Dark</span>
		</div>
	)
}
