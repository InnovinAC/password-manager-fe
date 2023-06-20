import {SiProgress} from "react-icons/si";

const TopBanner = () => {
    return (
        <div className={'rounded-[10px] p-4 bg-gradient-to-r from-blue-400 to-indigo-600 h-30'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <span className={'text-white font-bold'}>Safety Score</span>
                    <span className={'text-white'}>28 Passwords</span>
                </div>
                <SiProgress/>
            </div>

        </div>
    )
}

export default TopBanner;