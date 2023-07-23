import { create } from 'zustand';

const store = (set, get) => ({
	theme: 'dark',
	setDarkTheme: () => set({ theme: 'dark' }),
	setLightTheme: () => set({ theme: 'light' }),
});

export const useStore = create(store);