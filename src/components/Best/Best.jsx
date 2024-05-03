const Card = ({ title, text }) => {
	return (
		<div className="w-[310px] my-[80px] text-center">
			<p className="suisse font-bold">{title}</p>
			<p className="suisse">{text}</p>
		</div>
	);
};

const Best = () => {
	return (
		<>
			<div className="text-center my-[150px]">
				<h1 className="text-[2rem]">
					‘Your best and wisest refuge from all troubles is in your science.’ 
				</h1>
				<p className="suisse">Ada Lovelace</p>
			</div>

			<div className="bg-[#F6F5E8] flex justify-evenly items-center px-[80px] responsiveFlex">
				<Card
					title="Certified B Corp"
					text="We meet the highest verified standards of social and environmental performance, transparency and accountability."
				/>
				<Card
					title="Leaping Bunny approved"
					text="Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme."
				/>
				<Card
					title="PETA recognition"
					text="We appear on PETA's internationally recognised vegan and cruelty-free lists."
				/>
			</div>
		</>
	);
};
export default Best;
