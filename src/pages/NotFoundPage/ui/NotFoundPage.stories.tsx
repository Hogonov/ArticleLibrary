import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
