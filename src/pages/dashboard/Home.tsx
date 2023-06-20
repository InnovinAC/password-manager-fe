import DashboardFooter from "../../components/footer/dashboard.tsx";
import DashboardNavbar from "../../components/navbar/dashboard.tsx";
import TopBanner from "../../components/top-banner";

const Homepage = () => {
    return (
        <div className={'mx-4'}>
            <DashboardNavbar/>
            <DashboardFooter/>
            <TopBanner/>
        </div>

    )
}

export default Homepage;