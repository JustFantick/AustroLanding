import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './form.less';
import { slideUpAnim, genAnimDuration } from '../../motionConsts/motionConsts';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [companyName, setCompanyName] = useState('');

	const [isNameCorrect, setIsNameCorrect] = useState(true);
	const [isEmailCorrect, setIsEmailCorrect] = useState(true);
	const [isSumbitEnable, setIsSubmitEnable] = useState(false);

	function validateName() {
		if (name !== '') {
			setIsNameCorrect(true);
		} else {
			setIsNameCorrect(false);
		}
	}

	function validateEmail() {
		setIsEmailCorrect(
			/^[^@]+@\w+(\.\w+)+\w$/.test(email)
		);
	}

	function onBlurHandler(e) {
		switch (e.target.name) {
			case 'name':
				validateName();
				break;
			case 'email':
				validateEmail();
				break;
		}
	}

	useEffect(() => {
		setIsSubmitEnable((isNameCorrect && isEmailCorrect));
	}, [isNameCorrect, isEmailCorrect]);

	function onResetClick() {
		setName('');
		setEmail('');
		setCompanyName('');

		validateName();
		validateEmail();
	}

	return (
		<motion.form className='form' action='' method=''
			initial='hidden' whileInView='visible'>

			<motion.input
				variants={slideUpAnim}
				transition={{ duration: genAnimDuration / 2, type: 'spring', delay: 0.2 }}

				className={`form__input generic-text ${isNameCorrect && 'correct'}`}
				type="text" name='name' placeholder='Name' required
				value={name} onChange={(e) => setName(e.target.value)}
				onBlur={(e) => onBlurHandler(e)} />
			<motion.input
				variants={slideUpAnim}
				transition={{ duration: genAnimDuration / 2, type: 'spring', delay: 0.4 }}

				className={`form__input generic-text ${isEmailCorrect && 'correct'}`}
				type="email" name='email' placeholder='Email' required
				value={email} onChange={(e) => setEmail(e.target.value)}
				onBlur={(e) => onBlurHandler(e)} />
			<motion.input
				variants={slideUpAnim}
				transition={{ duration: genAnimDuration / 2, type: 'spring', delay: 0.6 }}

				className="form__input generic-text correct"
				type="text" name='companyName' placeholder='Company name (optional)'
				value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

			<div className="form__buttons">
				<motion.button
					variants={slideUpAnim}
					transition={{ duration: genAnimDuration, type: 'spring', delay: 0.6 }}
					className={`form-btn submit-btn ${!isSumbitEnable && 'disabled'}`}
					type='submit' disabled={!isSumbitEnable}>
					Submit
				</motion.button>
				<motion.button
					variants={slideUpAnim}
					transition={{ duration: genAnimDuration, type: 'spring', delay: 0.8 }}
					type='reset' onClick={onResetClick}
					className="form-btn reset-btn">
					Reset
				</motion.button>
			</div>

		</motion.form>
	)
}
