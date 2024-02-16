import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime, remainingTime, onReset }) {
    let timer = useRef();
    let dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);

        dialog.current.open();
    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }
    function handelStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10); // 업데이트 된 timeRemaining으로 10 밀리초마다 업데이트
        }, 10); // 0ms
    }

    function handelStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handelStop : handelStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? ' active' : undefined}></p>
                {timerIsActive ? 'Time is running...' : 'Timer in active'}
            </section>
        </>
    );
}
