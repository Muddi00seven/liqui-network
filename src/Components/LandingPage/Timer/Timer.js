import React, {useEffect , useState , useRef} from 'react'
import './timer.css';
import {useStore } from '../../../context/GlobalState';


const Timer = () => {
   // const [{accounts ,contract,dappsList}, dispatch] = useStore();
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds,setTimerSeconds] = useState('00');


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Sep 18, 2020 00:00:00').getTime();

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
        {/* <div style={{display: 'flex'}}>
            <h1>

            </h1>
            <h1>
                {timerDays}
                </h1>
                <h1>
                {timerHours}
                </h1>
                <h1>
                    {timerMinutes}
                </h1>
                <h1>
                {timerSeconds}

                </h1>
        </div> */}
             <div className='timer'>
            <div className='heading-div'>
                <p className="heading">Next Reward Halving</p>
                <div className="text-container">
                <p className="timertext-top" style={{marginTop: '-1px'}}>
                    from  <b className="b1"> 1,000 </b> to <b className="b2"> 500 </b> LQN 
                    in 5,456 Blocks
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
