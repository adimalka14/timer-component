import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function useTimer({
                                     initialTime = 60,
                                     autoStart = false,
                                     endTime = 0,
                                     onFinished,
                                 }) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(autoStart);
    const direction = initialTime > endTime ? 'down' : 'up';
    const startTimestampRef = useRef(autoStart ? Date.now() : null);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            const elapsedTime = (Date.now() - startTimestampRef.current) / 1000;

            const newTime =
                direction === 'down' ? time - elapsedTime : time + elapsedTime;

            const isFinished =
                direction === 'down' ? newTime <= endTime : newTime >= endTime;

            if (isFinished) {
                setTime(endTime);
                setIsRunning(false);
                onFinished?.();

                return;
            }

            setTime(Math.round(newTime));
        }, 250);

        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => {
        startTimestampRef.current = Date.now();
        setIsRunning(true);
    };

    const stopTimer = () => {
        startTimestampRef.current = null;
        setIsRunning(false);
    };

    const resetTimer = () => {
        stopTimer();
        setTime(initialTime);
    };

    return { time, startTimer, stopTimer, resetTimer };
}

useTimer.propTypes = {
    initialTime: PropTypes.number,
    autoStart: PropTypes.bool,
    endTime: PropTypes.number,
    onFinished: PropTypes.func,
};
