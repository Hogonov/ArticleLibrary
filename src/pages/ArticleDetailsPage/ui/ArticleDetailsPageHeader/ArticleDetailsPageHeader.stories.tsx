import React from 'react';
import {
    ComponentStory, ComponentMeta, type Meta, type StoryObj,
} from '@storybook/react';

import ArticleDetailsPage from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
