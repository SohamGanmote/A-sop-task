import { Heart, Menu, Search } from "lucide-react";

import { useEffect, useState } from "react";

import logo from "../../../assets/logo.png";

const Navbar = () => {
	if (window.innerWidth < 600)
		return (
			<>
				<section className="bg-transparent flex justify-between align-middle p-3 py-6">
					<img src={logo} alt="" />
					<div className="flex justify-between align-middle gap-5">
						<Search size={18} className="cursor-pointer" />
						<Heart size={18} className="cursor-pointer" />
						<p className="suisseMedium cursor-pointer">Cart</p>
						<Menu size={18} className="cursor-pointer" />
					</div>
				</section>
			</>
		);

	return (
		<>
			<section className="bg-[#fffef2] flex justify-between align-middle p-7 text-[14px]">
				<div className="flex justify-between align-middle gap-8">
					<p className="suisseMedium cursor-pointer">Skin Care</p>
					<p className="suisseMedium cursor-pointer">Body & Hand</p>
					<p className="suisseMedium cursor-pointer">Hair</p>
					<p className="suisseMedium cursor-pointer">Fragrance</p>
					<p className="suisseMedium cursor-pointer">Home</p>
					<p className="suisseMedium cursor-pointer">Kits & Travel</p>
					<p className="suisseMedium cursor-pointer">Gifts</p>
					<p className="suisseMedium cursor-pointer">Read</p>
					<p className="suisseMedium cursor-pointer">Stores</p>
					<p className="suisseMedium cursor-pointer">Facial Appointments</p>
					<Search size={18} className="cursor-pointer" />
				</div>
				<div className="flex justify-between align-middle gap-8">
					<p className="suisseMedium cursor-pointer">Login</p>
					<p className="suisseMedium cursor-pointer">Cabinet</p>
					<p className="suisseMedium cursor-pointer">Cart</p>
				</div>
			</section>
		</>
	);
};
export default Navbar;
