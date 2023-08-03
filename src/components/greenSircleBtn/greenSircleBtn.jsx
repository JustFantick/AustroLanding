import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';
import './greenSircleBtn.less';

export const GreenSircleBtn = forwardRef((props, ref) => (
	<div className='green-sircle-btn' ref={ref}>{props.text}</div>
));

export const MotionGreenSircleBtn = motion(GreenSircleBtn);