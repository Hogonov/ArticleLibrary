import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { UserRole } from '@/entities/User';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'TestUsername',
                avatar: AvatarImg,
                roles: [UserRole.ADMIN],
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const PrimaryAdmin: Story = {};
