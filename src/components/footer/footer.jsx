import React from 'react';
import './footer.less';

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
				<ul className="footer-body__nav nav">
					<li className="nav__item">about</li>
					<li className="nav__item">services</li>
					<li className="nav__item">projects</li>
					<li className="nav__item">steps</li>
					<li className="nav__item">team</li>
					<li className="nav__item">contacts</li>
				</ul>
			</div>

		</footer>
	)
}
