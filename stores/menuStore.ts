import { create } from 'zustand'

interface MenuType {
	navDocked: boolean,
	setNavDocked: (navDocked: boolean) => void,
	menuOpen: boolean,
	setMenuOpen: (menuOpen: boolean) => void,
}

export const useMenuStore = create<MenuType>((set) => ({
	navDocked: false,
	setNavDocked: (navDocked: boolean) => set({navDocked}),
	menuOpen: false,
	setMenuOpen: (menuOpen: boolean) => set({menuOpen}),
}))