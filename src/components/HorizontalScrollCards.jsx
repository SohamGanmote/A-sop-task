import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HorizontalScrollCards = ({ cardData, id = "scrollable" }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const scrollRight = () => {
		const scrollable = document.getElementById(id);
		if (scrollable) {
			const newPosition = scrollPosition + 500;
			scrollable.scroll({
				left: newPosition,
				behavior: "smooth",
			});
			setScrollPosition(newPosition);
		}
	};

	const scrollLeft = () => {
		const scrollable = document.getElementById(id);
		if (scrollable) {
			const newPosition = scrollPosition - 500;
			scrollable.scroll({
				left: newPosition,
				behavior: "smooth",
			});
			setScrollPosition(newPosition);
		}
	};

	return (
		<div className="flex justify-between items-center">
			{scrollPosition > 0 && (
				<p onClick={scrollLeft} className="scroll-btn">
					<ChevronLeft />
				</p>
			)}
			<div
				id={id}
				className="overflow-auto flex items-end horizontalScroll px-8"
			>
				{cardData.map((item, index) => (
					<div>{item.content}</div>
				))}
			</div>
			{scrollPosition < 2000 && (
				<p onClick={scrollRight} className="scroll-btn">
					<ChevronRight />
				</p>
			)}
		</div>
	);
};

export default HorizontalScrollCards;
