import React, { useEffect, useState } from 'react';
import './form.less';

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
		<form className='form' action='' method=''>
			<input className={`form__input generic-text ${isNameCorrect && 'correct'}`}
				type="text" name='name' placeholder='Name' required
				value={name} onChange={(e) => setName(e.target.value)}
				onBlur={(e) => onBlurHandler(e)}
			/>
			<input className={`form__input generic-text ${isEmailCorrect && 'correct'}`}
				type="email" name='email' placeholder='Email' required
				value={email} onChange={(e) => setEmail(e.target.value)}
				onBlur={(e) => onBlurHandler(e)}
			/>
			<input className="form__input generic-text correct"
				type="text" name='companyName' placeholder='Company name (optional)'
				value={companyName} onChange={(e) => setCompanyName(e.target.value)}
			/>

			<div className="form__buttons">
				<button type='submit'
					className={`form-btn submit-btn ${!isSumbitEnable && 'disabled'}`}
					disabled={!isSumbitEnable}>
					Submit
				</button>
				<button type='reset' onClick={onResetClick}
					className="form-btn reset-btn">
					Reset
				</button>
			</div>

		</form>
	)
}
