import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/const/const';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        view: ArticleView.SMALL,
    },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {};
