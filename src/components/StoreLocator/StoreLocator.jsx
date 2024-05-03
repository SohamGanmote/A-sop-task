import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const StoreLocator = () => {
	const [currentImg, setCurrentImg] = useState(0);

	const cardData = [
		"https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg",
		"https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg",
		"https://www.aesop.com/u1nb1km7t5q7/smo9jFDCxanZL9fgDNpek/cc6a6a583ca0035cc39dc45ef792aaa7/Aesop_MO_Stores_DFS_Macau_Four_Seasons_Hero_Bleed_Desktop_2880x1620px.jpg",
	];

	const rightClick = () => {
		if (currentImg === cardData.length - 1) setCurrentImg(0);
		else setCurrentImg((prv) => prv + 1);
	};

	const leftClick = () => {
		if (currentImg === 0) setCurrentImg(cardData.length - 1);
		else setCurrentImg((prv) => prv - 1);
	};

	return (
		<section className="flex justify-between mt-[100px] mb-10 responsiveFlex selection:bg-none">
			<div className="pt-4 sm:px-[100px] px-[10px]  mb-8">
				<h1 className="py-4 text-[2rem]">Store locator</h1>
				<p className="suisse">
					Our consultants are available to host you in-store and provide
					tailored guidance on gift purchases.
				</p>
				<button className="mt-4 p-4">
					<span>Find a nearby store</span>
					<ArrowRight size={18} />
				</button>
			</div>

			<div className="flex justify-between items-center">
				<p onClick={leftClick} className="scroll-btn">
					<ChevronLeft />
				</p>

				<div className="overflow-auto flex items-end horizontalScroll px-8">
					<img src={cardData[currentImg]} alt="" width={1100} />
				</div>

				<p onClick={rightClick} className="scroll-btn">
					<ChevronRight />
				</p>
			</div>
		</section>
	);
};
export default StoreLocator;
