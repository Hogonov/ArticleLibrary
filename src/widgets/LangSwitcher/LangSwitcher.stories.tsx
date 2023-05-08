import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
