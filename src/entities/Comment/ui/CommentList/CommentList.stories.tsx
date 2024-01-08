import type { Meta, StoryObj } from '@storybook/react';
import { User } from 'entities/User';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

const users: User[] = [
    {
        id: '1',
        username: 'admin',
        avatar: AvatarImg,
    },
    {
        id: '2',
        username: 'user',
        avatar: AvatarImg,
    },
];
const comments: Comment[] = [
    {
        id: '1',
        text: 'some comment',
        user: users[0],
    },
    {
        id: '2',
        text: 'some comment 2',
        user: users[1],
    },
    {
        id: '3',
        text: 'some comment 3',
        user: users[0],
    },
];

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        comments,
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {};
export const Loading: Story = {
    args: { isLoading: true },
};
export const NoComments: Story = {
    args: { comments: [] },
};
