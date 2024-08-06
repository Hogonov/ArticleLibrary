import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
    args: { children: <Text title="test" text="text text" /> },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {};
