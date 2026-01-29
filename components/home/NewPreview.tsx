import Image from 'next/image';

import FadeInView from "@/components/animation/FadeInView";
import ProductCard from "@/components/ProductCard";

export default function NewPreview() {
	return (
		<div className="w-full my-50 px-4 grid grid-cols-2 gap-x-2 gap-y-4">

<FadeInView className="py-4 text-[32px] leading-[32px] tracking-[.5px] font-medium text-center col-span-2">
	<h1>JUST DROPPED</h1>
</FadeInView>

<FadeInView className="relative w-screen h-50 -mx-4 col-span-2 bg-black">
						<Image
			src="/thumbs/onyx_thumb.WEBP"
			alt=""
			fill
			className="object-cover z-0"
			/>
		<div className="absolute inset-4 text-white flex flex-col justify-between items-end">
			<h1 className="text-[28px] leading-[32px] tracking-[.5px] font-medium text-shadow-lg/50">ONYX OBLIQUE PUFFER</h1>
			<h1 className="text-[24px] leading-[32px] tracking-[.5px] font-medium text-shadow-lg/50">SHOP NOW</h1>
		</div>
	</FadeInView>


<ProductCard src="heathered-overlook-waffle" name="HEATHERED OVERLOOK WAFFLE" price={70}/>
			<ProductCard src="mystery-plush" name="MYSTERY PLUSH" price={45}/>

			<ProductCard src="super-sticks" name="SUPER STICK" price={15}/>

			<ProductCard src="volt-oxygen-socks" name="VOLT OXYGEN SOCKS" price={20}/>

			
					<FadeInView className="w-full p-2 col-span-2 bg-neutral-100 text-center">

	<button>
		SEE ALL
	</button>
					</FadeInView>
</div>
	)
}

