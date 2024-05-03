import { ArrowRight } from "lucide-react";
import Navigater from "./Navigater";

const Hero3 = ({ toggle, next, previous, play, hero }) => {
	if (window.innerWidth < 600) {
		return (
			<section>
				<img
					src="https://www.aesop.com/u1nb1km7t5q7/7rQmw3i6gAn6z5s7QMsVD3/8cf186888ddd1c6da615a7d2d3ce71ec/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_1440x1500px.jpg"
					alt=""
					style={{ maxHeight: "600px", objectFit: "cover" }}
				/>
				<Navigater
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
				<div className="p-4">
					<p className="suisse">Skin Care+</p>
					<h1 className="suisse py-4 text-[2rem]">
						Vitamin-enriched skin care
					</h1>
					<p className="suisse">
						With generous measures of efficacious botanicals and skin-supportive
						ingredients, the Skin Care+ range was designed to provide optimal
						replenishment.
					</p>
					<button className="mt-4 p-4">
						<span>Discover the range</span>
						<ArrowRight size={18} />
					</button>
				</div>
			</section>
		);
	}

	return (
		<>
			<section className="flex justify-start gap-10 bg-[#F6F5E8]">
				{window.innerWidth > 600 && (
					<h1 className="pt-[6rem] ps-[5rem]  text-[2.5rem] suisse">Aēsop</h1>
				)}
				<div className="ml-[6rem] pt-[7rem] ">
					<p className="suisse">Skin Care+</p>
					<h1 className="suisse py-4 text-[2rem]">
						Vitamin-enriched skin care
					</h1>
					<p className="suisse w-[540px]">
						With generous measures of efficacious botanicals and skin-supportive
						ingredients, the Skin Care+ range was designed to provide optimal
						replenishment.
					</p>
					<button className="mt-4 p-4">
						<span>Discover the range</span>
						<ArrowRight size={18} />
					</button>
				</div>
				<img
					src="https://www.aesop.com/u1nb1km7t5q7/7rQmw3i6gAn6z5s7QMsVD3/8cf186888ddd1c6da615a7d2d3ce71ec/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_1440x1500px.jpg"
					alt=""
					style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
				/>
			</section>
		</>
	);
};
export default Hero3;
