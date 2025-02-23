# my-awesome-react-timer

A React hook (`useTimer`) and a Timer component that make it easy to create both countdown or count-up timers in your React applications. This library provides simple, configurable timers with optional SVG-based progress indicators (circles, lines), warning colors for critical times, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Using the Hook](#using-the-hook)
    - [Using the Timer Component](#using-the-timer-component)
- [Props](#props)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Countdown or Countup** with `useTimer`.
- **SVG-based** progress (circular or linear) for visually indicating the timer’s state.
- **Customizable** colors, stroke widths, font sizes, etc.
- **Lightweight** and easy to integrate into any React project.

## Installation

```bash
npm install my-awesome-react-timer
```
Make sure you have React (v19+) installed, as defined in the peer dependencies.

## Usage
### Using the Hook
``` jsx Copy
import React from 'react';
import { useTimer } from 'my-awesome-react-timer';

function MyTimerHookDemo() {
const { time, startTimer, stopTimer, resetTimer } = useTimer({
initialTime: 60,  // start at 60 seconds
endTime: 0,       // stop at 0
direction: 'down',
autoStart: false, // don't start immediately
});

return (
<div>
<h3>Time Left: {time}</h3>
<button onClick={startTimer}>Start</button>
<button onClick={stopTimer}>Stop</button>
<button onClick={() => resetTimer()}>Reset</button>
</div>
);
}

export default MyTimerHookDemo;
```
### Using the Timer Component
``` jsx Copy
import React from 'react';
import { Timer } from 'my-awesome-react-timer';

function MyTimerComponentDemo() {
// Typically, you'd have 'time' coming from the useTimer hook
// or some state logic, but for demo let's just set it statically.
return (
<div style={{ width: 150, height: 150 }}>
<Timer
time={50}         // current time value
initialTime={60}  // initial time
endTime={0}       // end time
direction="down"
strokeWidth={6}
useWarningColors={true}
frontStrokeColor="green"
backStrokeColor="lightgray"
/>
</div>
);
}

export default MyTimerComponentDemo;
```

## Props
### Timer
| Prop                 | Type          | Default     | Description                                         |
|----------------------|---------------|-------------|-----------------------------------------------------|
| **time**             | `number`      | _required_  | Current time (in seconds).                          |
| **initialTime**      | `number`      | `60`        | Starting time in seconds.                           |
| **endTime**          | `number`      | `0`         | When the timer stops.                               |
| **direction**        | `'up'/'down'` | `'down'`    | Timer counting up or down.                          |
| **strokeWidth**      | `number`      | `4`         | Stroke width for the SVG circle.                    |
| **frontStrokeColor** | `string`      | `green`     | Color for the primary/timer stroke.                 |
| **backStrokeColor**  | `string`      | `gray`      | Background stroke color.                            |
| **timeDisplayColor** | `'string'`    | `'black'`   | Text color for the displayed time.                  |
| **useWarningColors** | `boolean`     | `true`      | If true, changes color to orange/red near the end.. |
### useTimer
| Prop                 | Type          | Default  | Description                                         |
|----------------------|---------------|----------|-----------------------------------------------------|
| **initialTime**      | `number`      | `60`     | Starting time in seconds.                           |
| **endTime**          | `number`      | `0`      | When the timer stops.                               |
| **direction**        | `'up'/'down'` | `'down'` | Timer counting up or down.                          |
| **autoStart**        | `boolean`     | `false`  | If true, starts the timer immediately.              |

#### useTimer returns an object:
``` jsx Copy
{
time: number,               // current time
startTimer: () => void,     // function to start the timer
stopTimer: () => void,      // function to pause the timer
resetTimer: (val?: number) => void, // resets time to initial or to a custom value
}
```
## Contributing
1. Fork this repository
2. Create a new branch for your feature or bugfix: git checkout -b feature/some-improvement
3. Make your changes, write tests, commit, and push
4. Create a Pull Request with a clear explanation of what you’ve done
5. All contributions and suggestions are welcome!

## License
This project is licensed under the [MIT License](./LICENSE).

