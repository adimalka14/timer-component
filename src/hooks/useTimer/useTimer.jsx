import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function useTimer({ initialTime = 60, autoStart = false, endTime = 0, onFinished }) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(autoStart);
    const intervalRef = useRef(null);
    const direction = initialTime > endTime ? 'down' : 'up';

    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setTime((currentTime) => {
                if (!isRunning) return currentTime;

                if (currentTime === endTime) {
                    if (isRunning) {
                        setIsRunning(false);
                        onFinished?.();
                    }
                    return endTime;
                }
                return direction === 'down' ? currentTime - 1 : currentTime + 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isRunning, direction, endTime, onFinished]);


    const startTimer = () => setIsRunning(() => true);
    const stopTimer = () => setIsRunning(() => false);
    const resetTimer = () => setTime(() => {
        setIsRunning(() => false);
        return initialTime;
    });

    return { time, startTimer, stopTimer, resetTimer };
}

useTimer.propTypes = {
    initialTime: PropTypes.number,
    autoStart: PropTypes.bool,
    endTime: PropTypes.number,
    onFinished: PropTypes.func,
};