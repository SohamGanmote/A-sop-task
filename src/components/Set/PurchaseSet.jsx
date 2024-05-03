import { ArrowRight } from "lucide-react";

const PurchaseSet = () => {
	return (
		<section className="flex justify-center items-start mt-[100px] mb-10 responsiveFlex gap-[30px]">
			<img
				src="https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png"
				alt=""
				width={600}
				className="object-contain"
			/>

			<div className="sm:px-[100px] px-[10px]  mb-8">
				<h1 className="py-4 pt-0 text-[2rem]">Eminently suited to all</h1>
				<p className="suisse">
					An Aesop Gift Card is the ideal gift for the fussy, the faraway and
					anyone in between—conveniently delivered <br /> with the click of a
					mouse to conceal last-minute selections.
				</p>
				<button className="mt-4 p-4">
					<span>Purchase now</span>
					<ArrowRight size={18} />
				</button>
			</div>
		</section>
	);
};
export default PurchaseSet;
