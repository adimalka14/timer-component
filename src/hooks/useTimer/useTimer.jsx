import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function useTimer({ initialTime = 60, autoStart = false, endTime = 0, direction = 'down' }) {

    if (typeof initialTime !== 'number' || typeof endTime !== 'number') {
        throw new Error('[useTimer] initialTime and endTime must be numbers.');
    }

    if (initialTime < 0 || endTime < 0) {
        throw new Error('[useTimer] Negative values were passed; this might cause unexpected behavior.');
    }

    if (direction === 'down' && endTime > initialTime) {
        throw new Error('[useTimer] endTime is larger than initialTime in \'down\' mode; timer may behave oddly.');
    }

    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(autoStart);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (isRunning) {
                setTime((currentTime) => {
                    if (direction === 'down') {
                        return currentTime <= endTime ? endTime : currentTime - 1;
                    } else {
                        return (endTime !== 0 && currentTime >= endTime) ? endTime : currentTime + 1;
                    }
                });
            }
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const startTimer = () => setIsRunning(() => true);
    const stopTimer = () => setIsRunning(() => false);
    const resetTimer = () => setTime(() => initialTime);

    return { time, startTimer, stopTimer, resetTimer };
}

useTimer.propTypes = {
    initialTime: PropTypes.number,
    autoStart: PropTypes.bool,
    endTime: PropTypes.number,
    direction: PropTypes.oneOf(['up', 'down']),
};