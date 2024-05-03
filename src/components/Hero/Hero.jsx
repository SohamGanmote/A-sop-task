import Hero1 from "./components/Hero1";
import { useState, useEffect } from "react";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Navigater from "./components/Navigater";

const Hero = () => {
	const [hero, setHero] = useState(2);
	const [play, setPlay] = useState(true);

	const toggle = () => setPlay((prev) => !prev);

	const next = () => {
		if (hero === 3) setHero(1);
		else setHero((prev) => prev + 1);
	};

	const previous = () => {
		if (hero === 1) setHero(3);
		else setHero((prev) => prev - 1);
	};

	useEffect(() => {
		if (play) {
			const interval = setInterval(next, 6000);
			return () => clearInterval(interval);
		}
	}, [hero, play]);

	return (
		<div className="relative">
			{hero === 1 && (
				<Hero1
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
			)}
			{hero === 2 && (
				<Hero2
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
			)}
			{hero === 3 && (
				<Hero3
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
			)}

			{window.innerWidth > 600 && (
				<Navigater
					toggle={toggle}
					next={next}
					previous={previous}
					play={play}
					hero={hero}
				/>
			)}
		</div>
	);
};

export default Hero;
