import Image from  "next/image";

import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import ScrollList from "@/components/collections/ScrollList";
import Filters from "@/components/collections/Filters"
import ProductGrid from "@/components/collections/ProductGrid";
import Footer from "@/components/UI/Footer";

export default function Collections() {
	return (
		<>
			
		<TopBar />
		<NavBar docked={true}/>
    <ScrollList />
		<Filters />
    <ProductGrid />
		<Footer />
		</>
	)
}