
import 'react-circular-progressbar/dist/styles.css';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const TopBanner = () => {
    const percentage = 30;
    return (
        <div className={'rounded-[13px] p-5 bg-gradient-to-r from-blue-400 to-indigo-600 h-30'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <span className={'text-white text-xl font-bold'}>Safety Score</span>
                    <span className={'text-white'}>28 Passwords</span>
                </div>
                <div className={'w-12'}>
                <CircularProgressbar styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    // rotation: 0.65,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '1.4rem',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(0, 18, 0, ${percentage / 100})`,
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })} strokeWidth={20} value={percentage} text={`${percentage}%`} />
                </div>

            </div>

        </div>
    )
}

export default TopBanner;