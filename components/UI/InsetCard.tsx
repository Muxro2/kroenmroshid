import Image from 'next/image';

type CardProps = {
	src: string,
	header: string,
	desc: string,
	button: string,
	buttonColor?: string
}

export default function InsetCard({src, header, desc, button, buttonColor}: CardProps) {
	return (
		<div className="relative w-[85%] aspect-1/1 m-7.5">
			<Image
				src="/thumbs/tracks_thumb.WEBP"
				alt=""
				fill
				className="object-cover -z-10"
				/>

			<div className="absolute inset-y-10 inset-x-6 flex flex-col justify-between text-white">
        <h1 className="title font-bold">
          Built for the Elements.
        </h1>

				<div>
        <h2 className="text-md mb-4">
          Modern outdoor wear that fuses peformance, style, and sustainability.
        </h2>

        <div className="w-full text-[14px] flex justify-center gap-2">
          <h1 className="flex-1 py-2 bg-black text-center text-white rounded-md">
            Browse New
          </h1>
          <h1 className="flex-1 py-2 bg-white text-center text-black rounded-md">
            Collections
          </h1>
        </div>
				</div>
      </div>
		</div>
	)
}