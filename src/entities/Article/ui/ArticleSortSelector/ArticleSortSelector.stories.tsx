import { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
    argTypes: { },
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {};