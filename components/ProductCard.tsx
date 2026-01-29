import Image from 'next/image';

import FadeInView from '@/components/animation/FadeInView';

export default function ProductCard({src, name, price} : {src: string, name: string, price: number}) {
	return (
<FadeInView className="w-full p-6 flex flex-col gap-2 bg-neutral-100">
	<div className="relative w-full aspect-1/1 mb-4">
 <Image
		src={`/products/${src}.WEBP`}
		alt=""
		fill
		className="object-cover z-0"
		/>
	</div>
	<h2 className="text-[18px] leading-[18px]">{name}</h2>
	<h2 className="text-[16px] leading-[18px]">{`£${price}`}</h2>
</FadeInView>
)
}