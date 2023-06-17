import './index.css'
import {Routes, Route} from "react-router-dom";
import {initFlowbite} from "flowbite";
import Home from "./pages/Home.tsx";

initFlowbite()

function App() {


    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    )
}
export default App;
