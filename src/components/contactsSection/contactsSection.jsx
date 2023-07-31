import React from 'react';
import './contactsSection.less';

import Form from '../form/form.jsx';

export default function ContactsSection() {
	return (
		<section className='contacts-section'>
			<div className="contacts-section__title section-title">Work with us</div>
			<div className="contacts-section__body">
				<div className='contacts-section__article'>
					<p className="generic-article">
						Carrer de la Ciutat de
						Granada, 120, 08018
						Barcelona
					</p>
				</div>
				<div className='contacts-section__from-container'>
					<Form />
				</div>
			</div>

		</section>
	)
}
