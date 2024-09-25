import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import RouteDecorator from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import SuspenseDecorator from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                purple_theme: `app ${Theme.PURPLE_DARK}`,
            },
            defaultTheme: 'light',
        }) /* ThemeDecorator(Theme.LIGHT) */,

        RouteDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
