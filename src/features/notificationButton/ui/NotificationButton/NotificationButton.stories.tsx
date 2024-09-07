import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/Notification/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [{
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: {
                data: [{
                    id: '1',
                    title: 'TestNotification 1',
                    description: 'description',
                    href: '/',
                }],
            },
        }],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
