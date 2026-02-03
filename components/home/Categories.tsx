import Image from 'next/image';

import FadeInView  from "@/components/animation/FadeInView";

function Box({src, caption} : {src: string, caption: string}) {
  return (
    <FadeInView className="relative flex justify-center w-full h-50 bg-blue-800">
          <Image
            src={`/thumbs/${src}.WEBP`}
            alt=""
            fill
            className="object-cover"
            />
          <h2 className="absolute w-full bottom-8 text-[34px] text-center leading-[34px] backdrop-blur-[1px]">{caption}</h2>
        </FadeInView>
  )
}

export default function Categories() {
	return (
		<div className="w-full my-50 px-2 grid grid-cols-3 gap-x-2 gap-y-8 text-white text-shadow-lg/50 overflow-hidden">
      <Box src="coats_thumb" caption="COATS" />
      <Box src="tops_thumb" caption="TOPS" />
      <Box src="pants_thumb" caption="PANTS" />
      <Box src="tracks_thumb" caption="TRACKS" />
      <Box src="hats_thumb" caption="HATS" />
      <Box src="collectibles_thumb" caption="COLLECT" />
      
		</div>
	)
}