import HorizontalScrollCards from "../HorizontalScrollCards";

const Products2 = () => {
	const cardData = [
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/2ltO0Ersm2vJbh37823ra/1cbcb532eefb07f7de6df3f021a9c129/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Back_Large_900x916px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Immaculate Facial Tonic
						</h1>
						<p className="suisse text-[15px]">
							Exfoliating tonic with a light finish
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/56wpveVzKjF5Dkd1uLYy6b/394699592aaa7be8d6003528ec6ec275/Aesop_Skin_Primrose_Facial_Cleansing_Masque_60mL_Web_Large_901x478px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							B Triple C Facial Balancing Gel
						</h1>
						<p className="suisse text-[15px]">
							Embracing, vitamin-rich hydration
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Lucent Facial Concentrate
						</h1>
						<p className="suisse text-[15px]">
							A Vitamin C-rich layering serum
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/2ltO0Ersm2vJbh37823ra/1cbcb532eefb07f7de6df3f021a9c129/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Back_Large_900x916px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Immaculate Facial Tonic
						</h1>
						<p className="suisse text-[15px]">
							Exfoliating tonic with a light finish
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/56wpveVzKjF5Dkd1uLYy6b/394699592aaa7be8d6003528ec6ec275/Aesop_Skin_Primrose_Facial_Cleansing_Masque_60mL_Web_Large_901x478px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							B Triple C Facial Balancing Gel
						</h1>
						<p className="suisse text-[15px]">
							Embracing, vitamin-rich hydration
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Lucent Facial Concentrate
						</h1>
						<p className="suisse text-[15px]">
							A Vitamin C-rich layering serum
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/2ltO0Ersm2vJbh37823ra/1cbcb532eefb07f7de6df3f021a9c129/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Back_Large_900x916px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Immaculate Facial Tonic
						</h1>
						<p className="suisse text-[15px]">
							Exfoliating tonic with a light finish
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://www.aesop.com/u1nb1km7t5q7/56wpveVzKjF5Dkd1uLYy6b/394699592aaa7be8d6003528ec6ec275/Aesop_Skin_Primrose_Facial_Cleansing_Masque_60mL_Web_Large_901x478px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							B Triple C Facial Balancing Gel
						</h1>
						<p className="suisse text-[15px]">
							Embracing, vitamin-rich hydration
						</p>
					</div>
				</>
			),
		},
		{
			content: (
				<>
					<div className="p-4 text-center w-[500px] cursor-pointer">
						<img
							src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png"
							alt=""
							width={400}
							className="m-auto"
						/>
						<h1 className="suisse font-bold hover:underline  ">
							Lucent Facial Concentrate
						</h1>
						<p className="suisse text-[15px]">
							A Vitamin C-rich layering serum
						</p>
					</div>
				</>
			),
		},
	];
	return (
		<div className="sm:px-[100px] mb-4 selection:bg-none x-[10px]">
			<HorizontalScrollCards cardData={cardData} id="scrollable2" />
		</div>
	);
};
export default Products2;
