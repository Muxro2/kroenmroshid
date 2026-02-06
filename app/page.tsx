import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Splash from "@/components/home/Splash";

import InsetCard from "@/components/UI/InsetCard";
import FullCard from "@/components/UI/FullCard";

import Collapsible from "@/components/UI/Collapsible";

import Footer from "@/components/UI/Footer"

export default function Home() {
  return (
    <>
      
      <TopBar />
        
      <NavBar />
      <Splash />

      <InsetCard src="yes" header="a" desc="h" button="hey" />
      <FullCard src="yes" header="a" desc="h" button="hey" />
      <Collapsible text="contact us"/>
      <Collapsible text="about"/>
      <Collapsible text="find"/>

      <Footer />


    </>
  );
}
