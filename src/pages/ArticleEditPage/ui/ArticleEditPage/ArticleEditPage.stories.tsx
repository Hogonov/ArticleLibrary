import { type Meta, type StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
