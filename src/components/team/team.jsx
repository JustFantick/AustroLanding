import React from 'react';
import './team.less';
import Slider from 'react-slick';
import { useStore } from '../../store/store';

export default function Team() {
	const settings = {
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
		<section className='team'>
			<div className="team__title section-title">Team</div>
			<div className="team__body">
				<Slider {...settings}>
					{membersList.length !== 0 && membersList.map((member, id) => (
						<div className="slider-slide" key={id}>
							<img src={require(`../../img/${member.imgName}`)} alt={member.imgName} />
							<p>{member.name}</p>
						</div>
					))}
				</Slider>
			</div>

		</section>
	)
}
