import './index.css'
import {Routes, Route} from "react-router-dom";
import {initFlowbite} from "flowbite";
import Home from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";

initFlowbite();

function App() {


    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
    )
}
export default App;
