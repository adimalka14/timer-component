import React from 'react';
import { Timer } from '../components';

export default {
    title: 'Timer/StaticTimer',
    component: Timer,

    argTypes: {
        time: { control: { type: 'number', min: 0 } },
        initialTime: { control: { type: 'number', min: 0 } },
        endTime: { control: { type: 'number', min: 0 } },
        frontStrokeColor: { control: 'color' },
        backStrokeColor: { control: 'color' },
        timeDisplayColor: { control: 'color' },
        strokeWidth: { control: { type: 'number', min: 1 } },
        useWarningColors: { control: 'boolean' },
        direction: {
            control: { type: 'select', options: ['up', 'down'] },
        },
    },
};

const Template = (args) => (
    <div className={'my-timer'} style={{ width: '400px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Timer {...args} />
    </div>);

export const Interactive = Template.bind({});
Interactive.args = {
    time: 50,
    initialTime: 60,
    endTime: 0,
    frontStrokeColor: 'green',
    backStrokeColor: 'gray',
    timeDisplayColor: 'black',
    strokeWidth: 4,
    useWarningColors: true,
    direction: 'down',
};

export const finishedDown = Template.bind({});
finishedDown.args = {
    time: 15,
    initialTime: 60,
    endTime: 0,
    frontStrokeColor: 'green',
    backStrokeColor: 'transparent',
    timeDisplayColor: 'black',
    strokeWidth: 5,
    useWarningColors: true,
    direction: 'down',
};
