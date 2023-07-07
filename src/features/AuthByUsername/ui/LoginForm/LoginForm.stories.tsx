import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {

    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123', password: '123',
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: '123',
                error: 'Неверный логин или пароль',
            },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
    ],
};
