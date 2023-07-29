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
	}),

	projectsList: [
		{
			empty: false,
			imgName: 'project1.png',
			title: 'project 1',
		},
		{
			empty: false,
			imgName: 'project2.png',
			title: 'project 2',
		},
		{
			empty: false,
			imgName: 'project3.png',
			title: 'project 3',
		},
		{
			empty: false,
			imgName: 'project4.png',
			title: 'project 4',
		},
		{
			empty: false,
			imgName: 'project5.png',
			title: 'project 5',
		},
		{
			empty: true,
			imgName: '',
			title: '',
		},
		{
			empty: true,
			imgName: '',
			title: '',
		},
		{
			imgName: 'project6.png',
			title: 'project 6',
		},
		{
			imgName: 'project7.png',
			title: 'project 7',
		}
	],

	teamMembers: [
		{
			imgName: 'member1.png',
			name: 'Adam Smith',
		},
		{
			imgName: 'member2.png',
			name: 'Mariya Lopez',
		},
		{
			imgName: 'member3.png',
			name: 'paul adams',
		},
		{
			imgName: 'member4.jpg',
			name: 'laura gibson',
		},
	],
});

export const useStore = create(store);