import Authentication from "../components/authentication";
import Navbar from "../components/navbar";
import usePageTitle from "../hooks/usePageTitle.tsx";
import Footer from "../components/footer";
const {VITE_ENV_SITE_NAME} = import.meta.env

const RegisterPage = () => {
    const {setPageTitle} = usePageTitle();
    setPageTitle(`Registration Page - ${VITE_ENV_SITE_NAME}`)

    return (
        <>
            <Navbar/>
            <Authentication heading={'Register an account'} type={'Sign Up'}/>
            <Footer/>
        </>

    )
}

export default RegisterPage