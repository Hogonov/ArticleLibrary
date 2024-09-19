import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../../public'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        '@storybook/addon-themes',
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
