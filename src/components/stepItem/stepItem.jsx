import React from 'react';
import './stepItem.less';

export default function StepItem(props) {
	return (
		<div className='step-item'>
			{props.title}
		</div>
	)
}
