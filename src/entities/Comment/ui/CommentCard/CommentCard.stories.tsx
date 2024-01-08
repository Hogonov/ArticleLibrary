import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from 'entities/Comment';
import { CommentCard } from './CommentCard';

const comment: Comment = {
    id: '1',
    text: 'some comment',
    user: {
        id: '2',
        username: 'user',
        avatar: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
};

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        comment,
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {};
export const Loading: Story = { args: { isLoading: true } };
