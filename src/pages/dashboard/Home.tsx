import DashboardFooter from "../../components/footer/dashboard.tsx";
import DashboardNavbar from "../../components/navbar/dashboard.tsx";
import TopBanner from "../../components/top-banner";

const Homepage = () => {
    return (
        <div className={'sm:mx-8 my-auto mx-4 md:mx-32 lg:mx-60 xl:mx-80'}>
            <DashboardNavbar/>
            <DashboardFooter/>
            <TopBanner/>
        </div>

    )
}

export default Homepage;