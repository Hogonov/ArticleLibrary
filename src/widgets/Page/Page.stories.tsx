import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Text } from '@/shared/ui/Text';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: <Text title="test" text="text text" />,
    },
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {};
