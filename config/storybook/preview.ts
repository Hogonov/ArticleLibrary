import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import RouteDecorator from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
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
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator, SuspenseDecorator],
};

export default preview;
