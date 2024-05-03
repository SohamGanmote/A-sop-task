import Hero from "../components/Hero/Hero";
import NavBarAndHeaderLabel from "../components/NavBarAndHeaderLabel/NavBarAndHeaderLabel";
import Products from "../components/Products/Products";
import Products2 from "../components/Products/Products2";
import Products3 from "../components/Products/Products3";
import Grid from "../components/Grid/Grid";
import StoreLocator from "../components/StoreLocator/StoreLocator";
import PurchaseSet from "../components/Set/PurchaseSet";
import Best from "../components/Best/Best";
import Footer from "../components/Footer/Footer";

const Main = () => {
	return (
		<section>
			<NavBarAndHeaderLabel />
			<Hero />
			<Products />
			<Grid
				title="Experience Karst Eau de Parfum"
				subTitle="A seasonal offer"
				text="In celebration of balmy summer days, receive a complimentary vial offresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible  formulations. (Excludes Click and Collect.)"
				buttonText="Explore summer formulations"
				src="https://www.aesop.com/u1nb1km7t5q7/3UWzrNrjTbNjBomL9WkVaS/4aa0066ec853b88cfc0bd209174785c2/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Desktop_2560x1440px.jpg"
			/>
			<Grid
				title="The Gift Finder"
				subTitle="Options, streamlined"
				text="This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria."
				buttonText="Explore summer formulations"
				src="https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg"
				reverse
			/>
			<Products2 />
			<Grid
				title="Protective Facial Lotion SPF50"
				subTitle="High time for high coverage"
				text="Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine."
				buttonText="Discover Protective Facial Lotion SPF50"
				src="https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
			/>
			<Products3 />
			<Grid
				title="Composure for the skin and senses"
				subTitle="Facial Appointments"
				text="For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin."
				buttonText="Learn more"
				src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
				reverse
			/>
			<StoreLocator />
			<PurchaseSet />
			<Best />
			<Footer />
		</section>
	);
};
export default Main;
