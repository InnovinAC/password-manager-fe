import {Link} from "react-router-dom";

interface IBlueShadowButton {
    link: string;
    text: string;
}

const BlueShadowButton = (props: IBlueShadowButton) => {
    return (
        <Link to={props.link} className="mb-2 inline-block  rounded bg-blue-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white hover:shadow-[0_4px_1px_-1px_blue] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              role="button">{props.text}</Link>
    )
}

export default BlueShadowButton;