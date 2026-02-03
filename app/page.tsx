import NavBar from "@/components/NavBar";
import Splash from "@/components/home/Splash";
import NewPreview from "@/components/home/NewPreview"
import Categories from "@/components/home/Categories";
import FadeInView from "@/components/animation/FadeInView"

import InsetCard from "@/components/UI/InsetCard";
import FullCard from "@/components/UI/FullCard";

import Collapsible from "@/components/UI/Collapsible";

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-10 px-2 flex justify-between items-center bg-black">
        <h1 className="text-white">KROEN</h1>
      <h1 className="text-white">EN</h1>
      </div>
        
      <NavBar />
      <Splash />

      <InsetCard src="yes" header="a" desc="h" button="hey" />
      <FullCard src="yes" header="a" desc="h" button="hey" />
      <Collapsible text="contact us"/>
      <Collapsible text="about"/>
      <Collapsible text="find"/>

      

        <FadeInView className="w-full h-70 px-[15%] pb-4 flex flex-col justify-center items-center gap-8 bg-neutral-100 text-center">

        <h1 className="text-[32px] leading-[32px] tracking-[.5px] font-medium">STAY UPDATED</h1>
        <h2 className="text-[18px] leading-[18px]">SIGN UP TO OUR MAILING LIST FOR PROMOTIONS AND NEW DROPS</h2>
        <input className="w-[80%] py-1 px-2 bg-white" placeholder="Email"></input>

        </FadeInView>



        <div className="relative w-full pt-8 pb-18 flex flex-col items-center gap-12 bg-black text-white">
         <h1 className="w-[65%] text-[16px] leading-[16px] text-center">THE ONLY REAL PLACE TO GET YOUR KROEN. ANY OTHER WEBSITE IS A SCAM.</h1>
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
          <h2 className="absolute left-1 bottom-1 text-[12px]">© 2026, KROEN.CO.UK - WEBSITE BY M.ROSHID</h2>
        </div>
    </>
  );
}
