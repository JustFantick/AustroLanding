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
});

export const useStore = create(store);