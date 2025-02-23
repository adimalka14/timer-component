import React from 'react';
import PropTypes from 'prop-types';

export default function CircleProgressSvg(
    {
        frontStrokeColor,
        backStrokeColor,
        strokeWidth,
        progress = 1,
    }) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
      <>
            <circle r={radius} cx="50" cy="50"
                    fill={'transparent'}
                    stroke={backStrokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
            />

            <circle r={radius} cx="50" cy="50"
                    fill={'transparent'}
                    stroke={frontStrokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                        transition: 'stroke-dashoffset 0.5s ease',
                    }}
            />
      </>
    );
}

CircleProgressSvg.propTypes = {
    frontStrokeColor: PropTypes.string,
    backStrokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    progress: PropTypes.number,
};