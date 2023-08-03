import React, { useEffect } from 'react';
import './startScreen.less';

import Navigation from '../navigation/navigation.jsx';
import SwitchButton from '../switchButton/SwitchButton.jsx';
import { useStore } from '../../store/store.js';
import { motion } from 'framer-motion';

import { slideLeftAnim } from '../../motionConsts/motionConsts';

export default function StartScreen() {
	const time = useStore(state => state.localTime);
	const updateTime = useStore(state => state.unpdateLocalTime);

	useEffect(() => {
		updateTime();
		setInterval(updateTime, 1000);
	}, []);

	const transDelay = 0.3;

	return (
		<motion.main className='start-screen'
			initial='hidden'
			whileInView='visible'
		//viewport={{ once: true }}
		>
			<img className="start-screen__bg" src={require('../../img/startScreenBg.jpg')} alt="startScreenBg" />

			<div className="start-screen__body">
				<header className='header'>
					<div className="header__logo logo">WD</div>

					<Navigation extraClasses='header__menu' />

					<div className="header__theme">
						<SwitchButton />
					</div>
				</header>

				<motion.h1 className="start-screen__title main-title"
					variants={slideLeftAnim} transition={{ delay: transDelay, duration: 0.7, type: 'spring' }}>
					<span>we</span> transform ideas into digital outcomes
				</motion.h1>

				<div className="start-screen__footer start-screen-footer">
					<motion.a className="start-screen-footer__item" href="mailto:kotelevskijdanil0@gmail.com"
						variants={slideLeftAnim} transition={{ delay: transDelay + 0.2, duration: 0.7, type: 'spring' }}>
						authorsEmail@gmail.com
					</motion.a>
					<motion.div className="start-screen-footer__item"
						variants={slideLeftAnim} transition={{ delay: transDelay + 0.4, duration: 0.7, type: 'spring' }}>
						N 46° 8' W 25° 52'
					</motion.div>
					<motion.div className="start-screen-footer__item"
						variants={slideLeftAnim} transition={{ delay: transDelay + 0.6, duration: 0.7, type: 'spring' }}>
						Office time: {time}
					</motion.div>
				</div>
			</div>

		</motion.main>
	)
}
