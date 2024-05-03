import { ArrowUpRight } from "lucide-react";

const Footer = () => {
	return (
		<>
			<section className="bg-[#252525] text-white p-10 pb-8">
				<section className="flex justify-start items-start gap-[100px] responsiveFlex">
					<div>
						<h1 className="suisse pb-2 border-b-2">
							Subscribe to Aesop communications
						</h1>
						<input placeholder="Email Address" className="mt-3 w-full" />
						<div className="flex gap-2 mt-2">
							<input type="checkbox" />
							<p>
								Subscribe to receive communications from Aesop. By subscribing,
								you confirm you have read and understood our privacy policy.
							</p>
						</div>
					</div>

					<div>
						<h1 className="suisse pb-2 mb-2 border-b-2 min-w-[280px]">
							Orders and support
						</h1>
						<div className="cursor-pointer">
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Contact us <ArrowUpRight size={18} />
							</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								FAQs <ArrowUpRight size={18} />
							</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Shipping <ArrowUpRight size={18} />
							</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Returns <ArrowUpRight size={18} />
							</p>
							<p className="suisse mt-2">Order history </p>
							<p className="suisse mt-2">Check gift card balance </p>
							<p className="suisse mt-2">Terms and conditions </p>
						</div>
					</div>

					<div>
						<h1 className="suisse pb-2 mb-2 border-b-2 min-w-[280px]">
							Services
						</h1>
						<div className="cursor-pointer">
							<p className="suisse mt-2">Live assistance </p>
							<p className="suisse mt-2">Corporate gifts </p>
							<p className="suisse mt-2">Facial Appointments </p>
							<p className="suisse mt-2">Click and Collect </p>
							<p className="suisse mt-2">Video consultation </p>
						</div>
					</div>

					<div>
						<h1 className="suisse pb-2 mb-2 border-b-2 min-w-[280px]">
							Location preferences
						</h1>
						<div className="cursor-pointer">
							<p className="suisse mt-2">Shipping: </p>
							<p className="suisse mt-2 underline">Hong Kong, SAR</p>
							<p className="suisse mt-4 pt-4">Language: </p>
							<p className="suisse mt-2 underline">English </p>
							<p className="suisse mt-2">繁體中文 </p>
						</div>
					</div>
				</section>

				<section className="flex justify-start items-start gap-[100px] responsiveFlex mt-8">
					<div>
						<h1 className="suisse pb-2 border-b-2">Sustainability</h1>
						<p>
							All Aesop products are vegan, and we do not test our formulations
							or ingredients on animals. We are Leaping <br /> Bunny approved
							and a Certified B Corporation. Learn more
						</p>
					</div>

					<div>
						<h1 className="suisse pb-2 mb-2 border-b-2 min-w-[280px]">About</h1>
						<div className="cursor-pointer">
							<p className="suisse mt-2">Our story </p>
							<p className="suisse mt-2">Foundation </p>
							<p className="suisse mt-2">Careers </p>
							<p className="suisse mt-2">Privacy policy </p>
							<p className="suisse mt-2">Accessibility </p>
							<p className="suisse mt-2">Cookie Policy </p>
						</div>
					</div>

					<div>
						<h1 className="suisse pb-2 mb-2 border-b-2 min-w-[280px]">
							Social media
						</h1>
						<div className="cursor-pointer">
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Instagram <ArrowUpRight size={18} />
							</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Twitter <ArrowUpRight size={18} />
							</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								LinkedIn <ArrowUpRight size={18} />
							</p>
							<p className="suisse mt-2">WeChat</p>
							<p className="suisse flex justify-start items-center gap-3 mt-2">
								Weibo <ArrowUpRight size={18} />
							</p>
						</div>
					</div>
				</section>
			</section>
			<div className="border-t-2 bg-[#252525] text-white pl-10">
				<h1 className="suisse text-[1rem] mt-4 pb-4">© Aesop</h1>
			</div>
		</>
	);
};
export default Footer;
