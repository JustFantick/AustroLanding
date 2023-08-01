import React from 'react';
import './footer.less';
import Navigation from '../navigation/navigation.jsx';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className="footer__body footer-body">
				<div className="footer-body__logo logo">WD</div>
				<div className="footer-body__contacts">
					<h6 className='generic-subtitle'>Connect with us</h6>
					<a href="mailto:kotelevskijdanil0@gmail.com">
						authorsEmail@gmail.com
					</a>
				</div>
				<Navigation extraClasses={'footer-body__nav'} />
			</div>

		</footer>
	)
}
