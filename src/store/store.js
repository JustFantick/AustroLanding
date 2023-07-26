import { create } from 'zustand';

const store = (set, get) => ({
	theme: 'dark',
	setDarkTheme: () => set({ theme: 'dark' }),
	setLightTheme: () => set({ theme: 'light' }),

	localTime: '',
	unpdateLocalTime: () => set({
		localTime: new Intl.DateTimeFormat('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		}).format(new Date)
	}),

	servicesList: [
		{
			chosen: true,
			imgName: 'service1.png',
			title: 'Overview',
			text: 'Through our vertically integrated services, we own every phase of our work — from initial opportunities to ongoing management. From start to finish, we’re active, engaged, informed and accountable.',
		},
		{
			chosen: false,
			imgName: 'service1.png',
			title: 'Investment management',
			text: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem quis officia nisi veniam nesciunt sapiente tempora libero aspernatur? Harum?',
		},
		{
			chosen: false,
			imgName: 'service1.png',
			title: 'Development',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet corrupti reprehenderit quo officiis sequi magnam corporis neque nam recusandae? Perspiciatis similique nam aspernatur voluptatem fugiat, sequi unde sint dignissimos?',
		},
		{
			chosen: false,
			imgName: 'service1.png',
			title: 'Property management',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aliquam nihil nulla vel blanditiis, debitis vero dolores hic praesentium provident adipisci temporibus harum dicta veritatis consequatur aspernatur nostrum minus assumenda?',
		}
	],
	setServicesItemActive: (title) => set({
		servicesList: get().servicesList.map(item => {
			if (item.title !== title) {
				return { ...item, chosen: false };
			} else {
				return { ...item, chosen: true };
			}
		})
	})
});

export const useStore = create(store);