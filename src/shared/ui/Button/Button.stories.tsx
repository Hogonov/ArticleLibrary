import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'Button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
};
export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
