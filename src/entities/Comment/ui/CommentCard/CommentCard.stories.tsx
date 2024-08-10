import type { Meta, StoryObj } from '@storybook/react';
import type { Comment } from '../../model/types/comment';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { CommentCard } from './CommentCard';

const comment: Comment = {
    id: '1',
    text: 'some comment',
    user: {
        id: '2',
        username: 'user',
        avatar: AvatarImg,
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
