import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'Link',
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
    },
};
export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
