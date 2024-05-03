import { ArrowRight } from "lucide-react";
import Navigater from "./Navigater";

const Hero1 = ({ toggle, next, previous, play, hero }) => {
	if (window.innerWidth < 600) {
		return (
			<section className="bg-[#333] text-white">
				<img
					src="https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg"
					alt=""
					style={{ minHeight: "350px", objectFit: "cover" }}
				/>
				<Navigater
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
				<div className="p-4">
					<p className="suisse">Mother’s Day</p>
					<h1 className="suisse py-4 text-[2rem]">For the discerning</h1>
					<p className="suisse">
						Our range of products provides ample options for even the most
						particular of gift-givers and recipients—fitting choices to
						reciprocate maternal guidance.
					</p>
					<button className="btn-dark mt-4 p-4">
						<span>Discover Mother’s Day gifts</span>
						<ArrowRight size={18} />
					</button>
				</div>
			</section>
		);
	}

	return (
		<>
			<section
				style={{
					backgroundImage: `url("https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					minHeight: "600px",
				}}
				className="pt-[6rem] ps-[5rem] text-white flex justify-start gap-10"
			>
				{window.innerWidth > 600 && (
					<h1 className="text-[2.5rem] suisse">Aēsop</h1>
				)}
				<div className="pt-4 ml-[6rem]">
					<p className="suisse">Mother’s Day</p>
					<h1 className="suisse py-4 text-[2rem]">For the discerning</h1>
					<p className="suisse w-[540px]">
						Our range of products provides ample options for even the most
						particular of gift-givers and recipients—fitting choices to
						reciprocate maternal guidance.
					</p>
					<button className="btn-dark mt-4 p-4">
						<span>Discover Mother’s Day gifts</span>
						<ArrowRight size={18} />
					</button>
				</div>
			</section>
		</>
	);
};
export default Hero1;
