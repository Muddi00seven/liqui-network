import React, {useEffect , useState , useRef} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;

export default function App() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
//---------------------------------------
const[timerDays, setTimerDays] = useState('00');
const[timerHours, setTimerHours] = useState('00');
const[timerMinutes, setTimerMinutes] = useState('00');
const[timerSeconds,setTimerSeconds] = useState('00');


let interval = useRef();

const startTimer = () => {
    const countdownDate = new Date('May 24, 2021 00:00:00').getTime();

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
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daySeconds}
        initialRemainingTime={timerDays}
      >
        {({ elapsedTime }) =>
          // renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
          renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
  }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(
            "minutes",
            getTimeMinutes(hourSeconds - elapsedTime / 1000)
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [timerSeconds - totalElapsedTime > 0]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", setTimerSeconds(timerSeconds))
        }
      </CountdownCircleTimer>
    </div>
  );
}
