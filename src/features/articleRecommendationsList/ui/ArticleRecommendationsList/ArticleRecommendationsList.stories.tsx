import type { Meta, StoryObj } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/Article/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [StoreDecorator({}), withMock],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
