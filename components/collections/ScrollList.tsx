"use client"
import Image from 'next/image';

import { collections } from "@/data/collections";

import { useQueryStore } from "@/stores/queryStore"
export default function ScrollList() {
  const setCollection = useQueryStore((state) => state.setCollection);
	
	return (
		<div className="w-full pt-20 pb-4 pl-6 gap-4 flex items-center overflow-scroll">
			
			{collections.map((item, i) => (
																						
				<button onClick={() => setCollection(item.name)} key={i} className="relative flex-shrink-0 w-50 h-50 bg-linear-to-t from-[#000] to-[#000]">
			    <Image
					src={item.src}
					alt=""
					fill
					className="object-cover -z-10"
					priority={i < 3 ? true : false}
					/>
					<h1 className="absolute bottom-4 left-4 text-white text-[16px] font-bold text-shadow-[0_0_4px] text-shadow-white/40">{item.name.toUpperCase()}</h1>
			  </button>
		
				
			))}
			
		</div>
  )
}