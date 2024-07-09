import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
