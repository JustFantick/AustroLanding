const genAnimDuration = 0.5,
	slideLeftAnim = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
		},
	},
	slideRightAnim = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
		},
	},
	slideUpAnim = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
		},
	},
	gridItemAnim = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom * 0.2 }
		}),
	},
	scaleItem = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
		},
	};

export { genAnimDuration, slideLeftAnim, slideRightAnim, slideUpAnim, gridItemAnim, scaleItem };