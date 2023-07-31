import React from 'react';
import './form.less';

export default function Form() {
	return (
		<form className='form'>
			<input className="form__input" type="text" name='name' required />
			<input className="form__input" type="email" name='email' required />
			<input className="form__input" type="text" name='companyName' />

			<div className="form__buttons">
				<button className="submit-btn">Submit</button>
				<button className="reset-btn">Reset</button>
			</div>

		</form>
	)
}
