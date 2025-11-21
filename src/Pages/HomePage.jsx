import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import TechStack from "../sections/TechStack";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import LogoShowcase from "../sections/LogoShowcase";
import FeatureCards from "../sections/FeatureCards";
import AboutUs from "../sections/AboutUs"

//
import NavBar from "../components/NavBar";
import StarsCanvas from "../components/Stars";
import logoImage from '../assets/images/LogoSpaceH.Newbl.png';



const HomePage = () => {
  return (
	<>
		{/* Background 3D - luôn dưới cùng */}
		<StarsCanvas/>
		<img src={logoImage} alt="" className="fixed w-full   px-50 pt-6 -z-10 opacity-7 pointer-events-none"/>
		{/* Tất cả UI nằm trên */}
		<div className="relative z-0">
		<NavBar />
    	<Hero />
    	<ShowcaseSection />
    	<LogoShowcase />
    	{/* <FeatureCards /> */}
    	{/* <Experience /> */}
    	{/* <TechStack /> */}
    	{/* <Testimonials /> */}
		<AboutUs/>
    	<Contact />
    	<Footer />
		</div>
	</>
  );
};

export default HomePage