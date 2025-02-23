import React from 'react';
import PropTypes from 'prop-types';

import './Timer.scss';
import {CircleProgressSvg, TimeDisplaySvg} from '../../base-components';

export function Timer({
                          time,
                          initialTime,
                          endTime,
                          frontStrokeColor = 'green',
                          backStrokeColor = 'gray',
                          timeDisplayColor = 'black',
                          strokeWidth = 4,
                          useWarningColors = true,
                          direction = 'down',
                          children,
                      }) {

    const progress = direction === 'down' ? time / initialTime : (time - initialTime) / (endTime - initialTime);

    if(direction === 'down' && useWarningColors){
        if (progress < 0.3) {
            timeDisplayColor = frontStrokeColor = 'orange';
        }
        if (progress < 0.15) {
            timeDisplayColor = frontStrokeColor = 'red';
        }
    }

    return (
        <>
            <div className="timer" style={{ width: '100%', aspectRatio: '1/1', position: 'relative' }}>
                <svg height="100%"
                     width="100%"
                     viewBox="0 0 100 100"
                     xmlns="http://www.w3.org/2000/svg"
                     style={{ display: 'block' }}
                >
                    <CircleProgressSvg time={time} frontStrokeColor={frontStrokeColor} backStrokeColor={backStrokeColor} strokeWidth={strokeWidth} timeDisplayColor={timeDisplayColor} progress={progress} />
                    <TimeDisplaySvg totalSeconds={time} color={timeDisplayColor} />
                </svg>
            </div>
            {children}
        </>
    );
}

Timer.propTypes = {
    time: PropTypes.number,
    initialTime: PropTypes.number,
    endTime: PropTypes.number,
    frontStrokeColor: PropTypes.string,
    backStrokeColor: PropTypes.string,
    timeDisplayColor: PropTypes.string,
    useWarningColors: PropTypes.bool,
    strokeWidth: PropTypes.number,
    direction: PropTypes.oneOf(['up', 'down']),
};