import heroImage from '../assets/hero.jpg'
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import Footer from "../components/footer";

const Home = (props: any) => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Footer/>
        </>
    );
}

export default Home;