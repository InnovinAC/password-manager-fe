import Authentication from "../components/authentication";
import Navbar from "../components/navbar";
import usePageTitle from "../hooks/usePageTitle.tsx";
import Footer from "../components/footer";
const {VITE_ENV_SITE_NAME} = import.meta.env

const LoginPage = () => {
    const {setPageTitle} = usePageTitle();
    setPageTitle(`Login Page - ${VITE_ENV_SITE_NAME}`)

    return (
        <>
            <Navbar/>
            <Authentication type={'login'}/>
            <Footer/>
        </>

    )
}

export default LoginPage