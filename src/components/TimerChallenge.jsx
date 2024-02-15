import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ ref, title, targetTime }) {
    let [timerStarted, setTimerStarted] = useState(false);
    let [timerExpired, setTimerExpired] = useState(false);
    let timer = useRef();
    let dialog = useRef();

    function handelStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handelStop() {
        clearTimeout(timer.current);
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handelStop : handelStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? ' active' : undefined}></p>
                {timerStarted ? 'Time is running...' : 'Timer in active'}
            </section>
        </>
    );
}
