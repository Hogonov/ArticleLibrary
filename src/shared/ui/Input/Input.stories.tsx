import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        value: 'Text',
        placeholder: 'Text enter',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};
