import React from 'react';
import PropTypes from 'prop-types';
import { formatTime, getFontSize } from '../../utils/formatTime.js';

export default function TimeDisplaySvg({ totalSeconds, color }) {
    const fontSize = getFontSize(totalSeconds);
    const time = formatTime(totalSeconds);

    return (
        <text className="time-display" fontSize={fontSize} y="50" x="50" dominantBaseline="middle" textAnchor="middle"
              fill={color}
              style={{ fontWeight: 'bold' }} dy=".1em"
        >
            {time}
        </text>
    );
}

TimeDisplaySvg.propTypes = {
    totalSeconds: PropTypes.number,
    color: PropTypes.string,
};