import { ArrowRight } from "lucide-react";
import Navigater from "./Navigater";

const Hero2 = ({ toggle, next, previous, play, hero }) => {
	if (window.innerWidth < 600) {
		return (
			<section>
				<img
					src="https://www.aesop.com/u1nb1km7t5q7/2U9uhIgSFJ82Uke7M3Zgle/5f095af534b8acee7b6c97c144499630/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg"
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
					<p className="suisse">Warm weather companions</p>
					<h1 className="suisse py-4 text-[2rem]">
						Exfoliating and Replenishing Duo
					</h1>
					<p className="suisse">
						With generous measures of efficacious botanicals and skin-supportive
						ingredients, the Skin Care+ range was designed to provide optimal
						replenishment.
					</p>
					<button className="mt-4 p-4">
						<span>Discover the duo</span>
						<ArrowRight size={18} />
					</button>
				</div>
			</section>
		);
	}

	return (
		<>
			<section className="flex justify-start gap-10 bg-[#F6F5E8]">
				<h1 className="pt-[6rem] ps-[5rem]  text-[2.5rem] suisse">Aēsop</h1>
				<div className="ml-[6rem] pt-[7rem] ">
					<p className="suisse">Warm weather companions</p>
					<h1 className="suisse py-4 text-[2rem]">
						Exfoliating and Replenishing Duo
					</h1>
					<p className="suisse w-[540px]">
						With generous measures of efficacious botanicals and skin-supportive
						ingredients, the Skin Care+ range was designed to provide optimal
						replenishment.
					</p>
					<button className="mt-4 p-4">
						<span>Discover the duo</span>
						<ArrowRight size={18} />
					</button>
				</div>
				<img
					src="https://www.aesop.com/u1nb1km7t5q7/2U9uhIgSFJ82Uke7M3Zgle/5f095af534b8acee7b6c97c144499630/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg"
					alt=""
					style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
				/>
			</section>
		</>
	);
};
export default Hero2;
