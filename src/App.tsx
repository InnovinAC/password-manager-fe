import './index.css'
import {Routes, Route} from "react-router-dom";
import {initFlowbite} from "flowbite";
import Home from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";
import RegisterPage from "./pages/Register.tsx";
import Homepage from "./pages/dashboard/Home.tsx";

initFlowbite();

function App() {


    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/dashboard'} element={<Homepage/>}/>
        </Routes>
    )
}
export default App;
