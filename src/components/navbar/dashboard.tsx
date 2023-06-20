import {BsBell, BsSearch} from "react-icons/bs";
import {MdNotificationsNone} from "react-icons/md";

const DashboardNavbar = () => {
    return (
        <div className={"my-4"}>

            <div className={'flex justify-between flex-row'}>
                <div className={'flex'}>
                    <img className={'w-8 rounded-full mr-2 overflow-hidden'}
                         src={"https://www.jea.com/cdn/images/avatar/avatar-alt.svg"}/>
                    <div className={"flex space-y-0 flex-col"}>
                        <span>Welcome Back</span>
                        <span className={"font-bold"}>Innovin</span>
                    </div>
                </div>
                <div className={'flex my-auto space-x-3 flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}> <BsSearch/> </span>
                    <span className={'p-3 rounded-full bg-blue-300'}> <BsBell/> </span>
                </div>

            </div>
        </div>

    )
}

export default DashboardNavbar;