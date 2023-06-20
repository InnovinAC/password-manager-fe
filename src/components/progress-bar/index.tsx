import './style.css'
import {CircularProgressbar} from "react-circular-progressbar";

function CustomTextProgressbar(props: any) {
    const {percentage} = props

    return (

        <CircularProgressbar strokeWidth={20} value={percentage} text={`${percentage}%`}/>

    )
}
export default CustomTextProgressbar;
