import Image from  "next/image";

import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import RefundPolicy from "@/components/policy/RefundPolicy"
import ShippingPolicy from "@/components/policy/ShippingPolicy"
import Footer from "@/components/UI/Footer";

export default async function Policy({params} : {params: {policy: string}}) {
	const { policy } = await params;
	return (
		<>

		<TopBar />
		<NavBar docked={true}/>
			{policy == "refund-policy" && <RefundPolicy />}
			{policy == "shipping-policy" && <ShippingPolicy />}
		<Footer />
		</>
	)
}