import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';
import './stepItem.less';

export const StepItem = forwardRef((props, ref) => (
	<div className='step-item' ref={ref}>
		{props.title}
	</div>
));

export const MotionStepItem = motion(StepItem);