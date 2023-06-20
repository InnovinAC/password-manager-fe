import {RiAppsLine} from "react-icons/ri";
import {BiCard, BiCopy, BiFingerprint, BiLogIn, BiPhone} from "react-icons/bi";
import {MdPayment} from "react-icons/md";
import Img from '../../assets/avatar.jpeg'

const CategorySlider = () => {
    return (
        <div className={'my-3'}>
            <h2 className={'font-bold text-lg mb-3'}>Categories</h2>
            <div className={'flex space-x-5 flex-row rounded-full overflow-x-scroll'}>
                <div
                    className={'w-max flex space-x-3 p-3 border-2 border-amber-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><RiAppsLine/></span>
                    <span className={'my-auto'}>
                        All
                    </span>
                </div>
                <div
                    className={'w-max flex space-x-3 p-3 border-2 border-ash-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiLogIn/></span>
                    <span className={'my-auto'}>
                        Login
                    </span>
                </div>
                <div
                    className={'w-max flex space-x-3 p-3 border-2 border-ash-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><MdPayment/></span>
                    <span className={'my-auto'}>
                        Card
                    </span>
                </div>
                <div
                    className={'w-max flex space-x-3 p-3 border-2 border-ash-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiPhone/></span>
                    <span className={'my-auto'}>
                        iOS
                    </span>
                </div>
                <div
                    className={'w-max flex space-x-3 p-3 border-2 border-ash-100 rounded-full justify-between flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}><BiFingerprint/></span>
                    <span className={'my-auto'}>
                        Fingerprint
                    </span>
                </div>

            </div>

            <h2 className={'font-bold text-lg my-3'}>Recently Added</h2>
            <div className={'flex mb-32 flex-col space-y-3 overflow-y-scroll'}>
                <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            <div className={'flex h-20 bg-blue-200 rounded-xl px-3 py-2 justify-between mx-4 flex-row'}>
                    <div className={'flex justify-around space-x-3 flex-row'}>
                        <img className={'my-auto rounded-2xl w-2/3 h-2/3'} src={Img} />
                        <div className={'my-auto flex flex-col'}>
                            <span className={'font-bold'}>Google Account</span>
                            <span className={'text-sm'}>innovinanuonye@gmail.com</span>
                        </div>
                    </div>
                        <span className={'my-auto p-3 rounded-full bg-blue-400'}><BiCopy/></span>
                </div>
            </div>
        </div>
    )
}
export default CategorySlider;