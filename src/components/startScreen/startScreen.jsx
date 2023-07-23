import React from 'react';
import SwitchButton from '../switchButton/SwitchButton.jsx';

export default function StartScreen() {
	return (
		<main className='start-screen'>
			<img className="start-screen__bg" src={require('../../img/startScreenBg.jpg')} alt="startScreenBg" />

			<div className="start-screen__body">
				<header className='header'>
					<div className="header__logo">WD</div>
					<nav className="header__menu nav">
						<div className="nav__item">about</div>
						<div className="nav__item">services</div>
						<div className="nav__item">projects</div>
						<div className="nav__item">steps</div>
						<div className="nav__item">team</div>
						<div className="nav__item">contacts</div>
					</nav>
					<div className="header__theme">
						<SwitchButton />
					</div>

				</header>

				<h1 className="start-screen__title main-title">
					<span>we</span> transform ideas into digital outcomes
				</h1>

				<div className="start-screen__footer start-screen-footer">
					<a className="start-screen-footer__item" href="mailto:kotelevskijdanil0@gmail.com">authorsEmail@gmail.com
					</a>
					<div className="start-screen-footer__item">N 46° 8' W 25° 52'</div>
					<div className="start-screen-footer__item">Office time 17:23:36</div>
				</div>
			</div>

		</main>
	)
}
