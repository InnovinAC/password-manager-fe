import {RiAppsLine} from "react-icons/ri";
import {BiCard, BiFingerprint, BiLogIn, BiPhone} from "react-icons/bi";
import {MdPayment} from "react-icons/md";

const CategorySlider = () => {
    return (
        <div className={'my-4'}>
            <h2 className={'font-bold mb-3'}>Categories</h2>
            <div className={'flex space-x-5 flex-row rounded-full overflow-x-scroll'}>
                <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiLogIn/></span>
                    <span className={'my-auto'}>
                        Login
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><MdPayment/></span>
                    <span className={'my-auto'}>
                        Card
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiPhone/></span>
                    <span className={'my-auto'}>
                        iOS
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiFingerprint/></span>
                    <span className={'my-auto'}>
                        Fingerprint
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
            <div className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
            </div>
        </div>
    )
}
export  default CategorySlider;