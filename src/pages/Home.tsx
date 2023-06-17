import heroImage from '../assets/hero.jpg'
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import Footer from "../components/footer";
import Features from "../components/features";

const Home = (props: any) => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Features/>
            <Footer/>
        </>
    );
}

export default Home;