/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { themes as themesSB } from '@storybook/theming';
import '../src/App.css'

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        darkMode: {
            current: 'dark',
            dark: { ...themesSB.dark, appBg: 'black' },
            light: { ...themesSB.light, appBg: '#aeaeae' },
        },
    },
    decorators: [
        (Story, { globals: { componentTheme: globalTheme } }) => {
            document.body.classList.remove('light-mode', 'dark-mode');

            switch (globalTheme) {
                case 'dark':
                    document.body.classList.add('dark-mode');
                    break;
                case 'light':
                default:
                    document.body.classList.add('light-mode');
                    break;
            }

            return (
                    <Story />
            );
        },
    ],
    globalTypes: {
        componentTheme: {
            description: 'styled-components theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
            },
        },
    },
};

export default preview;
