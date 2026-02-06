import Image from 'next/image';

import Stars from "@/components/UI/Stars"

import { products } from "@/data/products";

	
export default function ProductGrid() {
	return (
			<div className="w-full grid grid-cols-2 gap-2 p-2">

				{products.map((product, i) => (

          <a key={product.id} href={`/${product.id}`} className="w-full p-4 flex flex-col items-center gap-4">
					
					<div className="relative w-full aspect-3/4">
					<Image
						src={product.images[0]}
						alt=""
						fill
						className="object-cover"
						/>
						</div>
					
					<h1 className="font-bold">{product.name}</h1>
					<p className="text-[12px]">{product.description}</p>
					<h1 className="text-[16px]">£{product.price}</h1>

					<Stars rating={product.rating} reviews={product.reviews}/>
					</a>
						))}
				</div>
				
				
			
		
  )
}