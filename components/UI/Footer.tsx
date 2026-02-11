import Image from "next/image";

import FadeInView from "@/components/animation/FadeInView"

export default function Footer() {
	return (
		<>
	
	    <FadeInView className="w-full h-70 px-[15%] pb-4 flex flex-col justify-center items-center gap-8 bg-neutral-100 text-center">

        <h1 className="text-xl leading-[32px] tracking-[.5px] font-medium">STAY UPDATED</h1>
        <h2 className="text-md leading-[18px]">Sign up to our mailing list for promotions and new drops</h2>
        <input className="w-[80%] py-1 px-2 bg-white" placeholder="Email"></input>

        </FadeInView>



        <div className="relative w-full pt-8 pb-18 flex flex-col items-center gap-12 bg-black text-white">
         <h1 className="w-[45%] text-sm leading-[16px] text-center">THE ONLY PLACE TO GET YOUR KROEN.</h1>
          <div className="flex gap-4">
          <Image
            src="/icons/instagram.svg"
            alt=""
            width={40}
            height={40}
            />
          <Image
            src="/icons/youtube.svg"
            alt=""
            width={40}
            height={40}
            />
          <Image
            src="/icons/tiktok.svg"
            alt=""
            width={40}
            height={40}
            />
          </div>
          <h2 className="absolute left-1 bottom-1 text-xs">© 2026, KROEN.CO.UK - WEBSITE BY M.ROSHID</h2>
        </div>
							</>
		)
}