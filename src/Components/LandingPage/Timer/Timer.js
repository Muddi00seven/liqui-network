import React, {useEffect , useState , useRef} from 'react'
import './timer.css';
import {useStore } from '../../../context/GlobalState';


const Timer = () => {
    let [{lastBlock, currentReward , halvePeriod}] = useStore()
    let lol = parseInt(lastBlock);
    let unixTimestamp = lol;
    //Since JavaScript works in milliseconds, you should convert 
    // the time into milliseconds by multiplying it by 1000.
    let date = new Date(unixTimestamp * 1000);
    
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let dates = date.getDate()
    // let locateString = date.toLocaleDateString()
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    
    // Will display time in 11:10:22 format
    let formatTime =  month + ' ' + dates + ', '  + year + ' ' + hours + ': ' + ' ' + minutes.substr(-2) + ':' + seconds.substr(-2) ;
    // let formatTime = locateString;
    let stringyDate = formatTime.toString()


   // const [{accounts ,contract,dappsList}, dispatch] = useStore();
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds,setTimerSeconds] = useState('00');


    let interval = useRef();
    let lqnBlock = currentReward/2;
    

    const startTimer = () => {
        // const countdownDate = new Date('Sep 20, 2020 00:00:00').getTime();
        const countdownDate = new Date(stringyDate).getTime();


        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);


            if(distance < 0) {
                clearInterval(interval.current)
            }
            else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);

    };

    useEffect(() => {
        startTimer();
         return () => {
            clearInterval(interval.current)
         }
    })

    return (
        <>
             <div className='timer'>
            <div className='heading-div'>
                <p className="heading">Next Reward Halving</p>
                <div className="text-container">
                <p className="timertext-top" style={{marginTop: '-1px'}}>
                    from  <b className="b1"> {currentReward} </b> to <b className="b2"> {lqnBlock} </b> LQN 
                    in {lastBlock} Blocks
                </p>
                </div>
            </div>
            <div className='display-timer'>
                <div className='timer-flex'>
                    <div className='d-two'>
                        <span className='timer-num one'><b>{timerDays} </b></span>
                        <span className='timer-text one1'>days</span>
                    </div>
                    <div className=''>
                        <span className='timer-num '> <b>{timerHours}</b></span>
                        <span className='timer-text'>hours</span>
                    </div>
                    <div className=''>
                        <span className='timer-num two'><b>{timerMinutes}</b></span>
                        <span className='timer-text two2'>minutes</span>
                    </div>
                    <div className=''>
                        <span className='timer-num two'> <b>{timerSeconds}</b></span>
                        <span className='timer-text two2'>seconds</span>
                    </div>
                </div>
            </div>

            <div className='btn-div'>
                

            </div>
        </div>
        </>
    )
}

export default Timer
