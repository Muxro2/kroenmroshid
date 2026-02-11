import {useRouter} from 'next/navigation'
import Link from "next/link";

import { useQueryStore } from "@/stores/queryStore";
import { useMenuStore } from "@/stores/menuStore";

import { collections } from "@/data/collections";

export default function NavMenu() {
	const router = useRouter()
  const setCollection = useQueryStore((state) => state.setCollection);
	const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
	
	return (
	  <div className="flex flex-col gap-2 ">
			{collections.map((collection,i) => (
			<button 
				key={i}
				onClick={() => {
				setMenuOpen(false)
				setCollection(collection.name)
				router.push("/collections")
			}} className="text-[16px] font-bold">{collection.name.toUpperCase()}</button>
			))}
	  </div>
	)
}