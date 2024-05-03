import { ArrowRight } from "lucide-react";

const Grid = ({ title, subTitle, text, buttonText, src, reverse = false }) => {
	return (
		<section className="flex justify-between mt-[100px] mb-10 responsiveFlex">
			{reverse && <img src={src} alt="" width={1100} />}

			<div className="pt-4 sm:px-[100px] px-[10px]  mb-8">
				<p className="suisse text-[15px]">{subTitle}</p>
				<h1 className="py-4 text-[2rem]">{title}</h1>
				<p className="suisse">{text}</p>
				<button className="mt-4 p-4">
					<span>{buttonText}</span>
					<ArrowRight size={18} />
				</button>
			</div>

			{!reverse && <img src={src} alt="" width={1100} />}
		</section>
	);
};
export default Grid;
