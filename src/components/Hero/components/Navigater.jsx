import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Navigater = ({ toggle, next, previous, play, hero }) => {
	return (
		<>
			<div className="flex justify-center align-middle gap-2 my-3 selection:bg-none">
				<ChevronLeft className="cursor-pointer" onClick={previous} />
				<p className="suisse">{hero} / 3</p>
				<ChevronRight className="cursor-pointer" onClick={next} />
				{play ? (
					<Pause
						fill
						size={20}
						strokeWidth={0.5}
						className="cursor-pointer"
						onClick={toggle}
					/>
				) : (
					<Play
						fill
						size={20}
						strokeWidth={0.5}
						className="cursor-pointer"
						onClick={toggle}
					/>
				)}
			</div>
		</>
	);
};
export default Navigater;
