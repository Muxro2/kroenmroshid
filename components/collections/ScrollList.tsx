"use client"
import Image from 'next/image';

import { collections } from "@/data/collections";

import { useQueryStore } from "@/stores/queryStore"
export default function ScrollList() {
	const QueryStore = useQueryStore();
  const setCollection = useQueryStore((state) => state.setCollection);
	
	return (
		<div className="w-full h-50 mt-28 mb-4 px-50 gap-2 flex items-center overflow-x-scroll no-scrollbar snap-x snap-proximity overscroll-none">
			
			{collections.map((item, i) => (
																						
				<button onClick={() => setCollection(item.name)} key={i} className={`${QueryStore.collection == item.name ? "w-50 h-50" : "w-45 h-45"  } relative flex-shrink-0 bg-linear-to-t from-[#0007] to-[50%] to-[#0000] shadow-md transition-all duration-300 snap-center`}>
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