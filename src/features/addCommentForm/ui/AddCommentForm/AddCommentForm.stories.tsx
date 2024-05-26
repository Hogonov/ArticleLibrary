import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    argTypes: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {};
