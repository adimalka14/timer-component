import React from 'react';
import { action } from '@storybook/addon-actions';

import useTimer from '../hooks/useTimer/useTimer.jsx';
import { Timer } from '../components';

export default {
    title: 'Timer/Timer&Hook',
    component: Timer,
    argTypes: {
        initialTime: { control: { type: 'number', min: 0 } },
        endTime: { control: { type: 'number', min: 0 } },
        frontStrokeColor: { control: 'color' },
        backStrokeColor: { control: 'color' },
        timeDisplayColor: { control: 'color' },
        strokeWidth: { control: { type: 'number', min: 1 } },
        useWarningColors: { control: 'boolean' },
        onFinished: { table: { disable: true } },
    },
};

const Template = (args) => {
    const { initialTime, endTime, onFinished } = args;

    const { time, startTimer, stopTimer, resetTimer } = useTimer({
        initialTime,
        autoStart: false,
        endTime,
        onFinished,
    });


    return (
        <div className="my-timer" style={{ width: '200px', height: '200px' }}>
            <Timer time={time} {...args}>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </Timer>
        </div>
    );
};

export const Test = Template.bind({});
Test.args = {
    initialTime: 60,
    endTime: 0,
    frontStrokeColor: 'green',
    backStrokeColor: 'gray',
    timeDisplayColor: 'black',
    strokeWidth: 4,
    useWarningColors: true,
    onFinished: action('onFinished'),
};