import type { Meta, StoryObj } from '@storybook/react';
import { User } from 'entities/User';
import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

const users: User[] = [
    {
        id: '1',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    {
        id: '2',
        username: 'user',
        avatar: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
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
