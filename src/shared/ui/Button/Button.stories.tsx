import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonTheme, ButtonSize } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};
export const BackgroundInvertedTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
