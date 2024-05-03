const Header = () => {
	return (
		<>
			<div className="bg-[#c2c2af] text-[#333] sm:text-center p-2 text-left">
				<p className="text-[14px] suisseRegular">
					Purchase two eligible seasonal products to receive a Karst Eau de
					Parfum sample.{" "}
					<span
						className="suisseRegular cursor-pointer hover:underline"
						style={{ fontWeight: 500 }}
					>
						Browse formulations
					</span>
				</p>
			</div>

			<div className="bg-[#252525] text-[#fffef2] p-2 flex justify-between sm:justify-center align-middle gap-2">
				<p className="text-[14px] suisseRegular hover:underline cursor-pointer">
					Click and Collect is now available in Hong Kong. Enjoy complimentary
					shipping on all orders.
				</p>
				<p>+</p>
			</div>
		</>
	);
};
export default Header;
