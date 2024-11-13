import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import NewDesignDecorator from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { CommentCard } from './CommentCard';
import type { Comment } from '../../model/types/comment';

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
export const PrimaryRedesigned: Story = {
    decorators: [NewDesignDecorator],
};
export const Loading: Story = { args: { isLoading: true } };
