import Image from 'next/image';

export default function Stars({rating, reviews} : {rating: number, reviews: number}) {
	return (
		<div className="flex">
			{Array.from({ length: rating }).map((_, i) => (
					<Image  key={i} src="/icons/star-filled.svg" alt="" width={12} height={12} />
					))}
						{Array.from({ length: 5 - rating }).map((_, i) =>(

						<Image key={i} src="/icons/star-unfilled.svg" alt="" width={12} height={12} />
						))}
						<h1 className="ml-2 text-[12px]">({reviews})</h1>
   </div>
		)
}
					
			
				
