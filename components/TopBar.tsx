"use client"
import { useMenuStore } from "@/stores/menuStore";

export default function TopBar() {
	const MenuStore = useMenuStore()
	const menuOpen = MenuStore.menuOpen
	
	return(
		<div className={`fixed top-0 w-screen h-10 px-2 flex justify-between items-center bg-black z-100`}>
		        <h1 className="text-white ">KROEN</h1>
      <h1 className="text-white">EN</h1>
      </div>
	)
}