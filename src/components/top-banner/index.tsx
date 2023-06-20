import RoundedProgressBar from "../progress-bar";
import 'react-circular-progressbar/dist/styles.css';

const TopBanner = () => {
    const percentage = 50;
    return (
        <div className={'rounded-[10px] p-4 bg-gradient-to-r from-blue-400 to-indigo-600 h-30'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <span className={'text-white font-bold'}>Safety Score</span>
                    <span className={'text-white'}>28 Passwords</span>
                </div>
                <div className={'w-10'}>
                <RoundedProgressBar percentage={percentage}>

                </RoundedProgressBar>
                </div>

            </div>

        </div>
    )
}

export default TopBanner;