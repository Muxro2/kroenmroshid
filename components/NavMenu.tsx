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
	  <div className="flex flex-col items-center pt-6 gap-3 ">
			{collections.map((collection,i) => (
			<button 
				key={i}
				onClick={() => {
				setMenuOpen(false)
				setCollection(collection.name)
				router.push("/collections")
			}} className="text-[16px] font-bold">{collection.name.toUpperCase()}</button>
			))}
			<div className="flex flex-col items-center gap-2 mt-4">
				
			<button onClick={() => {
			  setMenuOpen(false)
				router.push("/policies/refund-policy")}}
				className="text-sm font-bold">REFUND POLICY</button>
			<button onClick={() => {
				setMenuOpen(false)
				router.push("/policies/shipping-policy")}} className="text-sm font-bold">SHIPPING POLICY</button>
			<Link href="/" className="text-sm font-bold">CONTACT</Link>
			</div>
			<h1 className="mt-4 text-sm">© 2026 KROEN</h1>
	  </div>
	)
}