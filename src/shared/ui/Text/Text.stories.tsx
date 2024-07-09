import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'title title',
        text: 'text text text',
    },
};

export const PrimarySizeL: Story = {
    args: {
        title: 'title title',
        text: 'text text text',
        size: TextSize.L,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'title title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text text text',
    },
};

export const Error: Story = {
    args: {
        title: 'Error title',
        text: 'Error',
        theme: TextTheme.ERROR,
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'title title',
        text: 'text text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'title title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'text text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
    args: {
        title: 'Error title',
        text: 'Error',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
