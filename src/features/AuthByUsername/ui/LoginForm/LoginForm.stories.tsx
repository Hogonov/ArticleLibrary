import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/Input',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {

    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
};