/** @type { import('@storybook/react-vite').StorybookConfig } */
module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs)'],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        '@storybook/test-runner',
        'storybook-dark-mode',
    ],
    framework: { name: '@storybook/react-vite', options: {} },
    staticDirs: ['../public'],
};
