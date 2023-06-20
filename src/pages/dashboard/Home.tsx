import DashboardFooter from "../../components/footer/dashboard.tsx";
import DashboardNavbar from "../../components/navbar/dashboard.tsx";
import TopBanner from "../../components/top-banner";
import CategorySlider from "../../components/categories/CategorySlider.tsx";

const Homepage = () => {
    return (
        <div className={'overflow-y-scroll h-screen sm:mx-8 my-auto mx-4 md:mx-32 lg:mx-60 xl:mx-80'}>
            <DashboardNavbar/>
            <DashboardFooter/>
            <TopBanner/>
            <CategorySlider/>
        </div>

    )
}

export default Homepage;