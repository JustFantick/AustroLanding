import React from 'react';
import { motion } from 'framer-motion';

import './team.less';
import Slider from 'react-slick';
import { useStore } from '../../store/store';
import { slideLeftAnim, genAnimDuration, gridItemAnim } from '../../motionConsts/motionConsts';

export default function Team() {
	const sliderSettings = {
		dots: false,
		arrows: false,
		infinite: false,
		centerMode: true,
		variableWidth: true,
		swipeToSlide: true,
		focusOnSelect: true,
		speed: 300,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					focusOnSelect: false,
					variableWidth: false,
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 0,
					dots: true,
					appendDots: dots => (
						<div
							style={{
								backgroundColor: "transparent",
								padding: "10px"
							}}
						>
							<ul className='custom-dots' style={{
								margin: "0px",
							}}>{dots}</ul>
						</div>
					),
				}
			},
			{
				breakpoint: 768,
				settings: {
					focusOnSelect: false,
					variableWidth: false,
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 0,
					dots: true,
					appendDots: dots => (
						<div
							style={{
								backgroundColor: "transparent",
								padding: "10px"
							}}
						>
							<ul className='custom-dots' style={{
								margin: "0px",
							}}>{dots}</ul>
						</div>
					),
				}
			},
			{
				breakpoint: 550,
				settings: {
					focusOnSelect: false,
					variableWidth: false,
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					dots: true,
					appendDots: dots => (
						<div
							style={{
								backgroundColor: "transparent",
								padding: "10px"
							}}
						>
							<ul className='custom-dots' style={{
								margin: "0px",
							}}>{dots}</ul>
						</div>
					),
				}
			},
		],
	}

	const membersList = useStore(state => state.teamMembers);

	return (
		<motion.section
			initial='hidden' whileInView='visible'
			className='team' id='team'>
			<motion.div
				variants={slideLeftAnim}
				transition={{ duration: genAnimDuration, type: 'spring' }}
				className="team__title section-title">
				Team
			</motion.div>
			<div className="team__body">
				<Slider {...sliderSettings}>
					{membersList.length !== 0 && membersList.map((member, id) => (
						<motion.div className="slider-slide" key={id}
							variants={gridItemAnim} custom={id}
							transition={{ duration: genAnimDuration, type: 'spring' }}>
							<img src={require(`../../img/${member.imgName}`)} alt={member.imgName} />
							<p className='generic-subtitle'>{member.name}</p>
						</motion.div>
					))}
				</Slider>
			</div>

		</motion.section>
	)
}
