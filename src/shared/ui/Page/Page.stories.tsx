import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: <Text title="test" text="text text" />,
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {};
