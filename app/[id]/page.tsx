import Image from "next/image";

import NavBar from "@/components/NavBar";
import Footer from "@/components/UI/Footer";
import Stars from "@/components/UI/Stars";
import SizeSelector from "@/components/product/SizeSelector";

import { products } from "@/data/products";

export default async function Product({ params }: { params: { id: string } }) {
	const { id } = await params;

	const product = products.find((product) => id == product.id);

	return (
		<>
			<NavBar />
			<div className="w-full pt-20"></div>

			{product ? (
				<div className="p-4">
					<h1 className="">
						KROEN {`>`} Coats {`>`} {product.name}
					</h1>

					<div className="relative w-full aspect-3/4">
						<Image
							src={product.images[0]}
							alt=""
							fill
							priority
							className="object-cover"
						/>
					</div>

					<h1 className="text-[24px] py-2 font-bold">{product.name}</h1>
					<Stars rating={5} reviews={732} />
					<p className="text-[16px] py-2">{product.description}</p>
					<h1 className="text-[24px] py-8 font-semibold">£{product.price}</h1>

					<h1 className="text-md font-medium">Select Size</h1>
					<SizeSelector />

					<button className="w-full px-4 py-2 my-4 mb-8 bg-black text-white rounded-full">
						Add to Bag
					</button>

					<h1>Swagged Out</h1>
					<h1>Fully Custom Printed Shell</h1>
					<h1>100% Cotton Filling</h1>
					<h1>Detachable Hood</h1>
					<h1>Asymetrical YKK Front Zipper</h1>
					<h1>4 External YKK Zip Pockets</h1>
					<h1>3 Internal Pockets</h1>
					<h1>Custom Moulded Snap Buttons</h1>
					<h1>Elastic Waist & Hood Toggles</h1>
					<h1>Model is 5"11 Wearing Medium</h1>
					<h1>Refer to Size Guide</h1>

										</div>
			) : (
				<h1>Product not found</h1>
			)}

					<h1 className="m-4 text-[24px]">You May Also Like</h1>

					<div className="w-full flex overflow-scroll">
						{Array.from({ length: 3 }).map((_, i) => (
							<a
								key={i}
								href="/product"
								className="w-50 flex-shrink-0 p-4 flex flex-col items-center gap-4"
							>
								<div className="relative w-full aspect-3/4">
									<Image
										src="/products/heathered-overlook-waffle.WEBP"
										alt=""
										fill
										className="object-cover"
									/>
								</div>

								<h1 className="font-bold text-center">Heathered Overlook Waffle</h1>
								<p className="text-[12px] text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<h1 className="text-[16px]">£70</h1>

								<Stars rating={5} reviews={235} />
							</a>
						))}
					</div>


			<h1 className="m-4 text-[24px]">Top Picks</h1>

			<div className="w-full flex overflow-scroll">
				{Array.from({ length: 3 }).map((_, i) => (
					<a
						key={i}
						href="/product"
						className="w-50 flex-shrink-0 p-4 flex flex-col items-center gap-4"
					>
						<div className="relative w-full aspect-3/4">
							<Image
								src="/products/heathered-overlook-waffle.WEBP"
								alt=""
								fill
								className="object-cover"
							/>
						</div>

						<h1 className="font-bold text-center">Heathered Overlook Waffle</h1>
						<p className="text-[12px] text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h1 className="text-[16px]">£70</h1>

						<Stars rating={5} reviews={235} />
					</a>
				))}
			</div>

			<Footer />
		</>
	);
}
