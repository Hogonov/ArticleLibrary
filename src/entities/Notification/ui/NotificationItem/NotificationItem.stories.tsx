import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        item: {
            id: '1', href: '/', title: 'Test', description: 'Test description',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {};
