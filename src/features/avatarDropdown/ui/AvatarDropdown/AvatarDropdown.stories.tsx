import type { Meta, StoryObj } from '@storybook/react';

import { UserRole } from '@/entities/User';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropdown } from './AvatarDropdown';

const userData = {
    id: '1',
    username: 'TestUsername',
    avatar: AvatarImg,
    roles: [UserRole.ADMIN],
};

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/Avatar/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'TestUsername',
                    avatar: AvatarImg,
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const PrimaryAdmin: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: { ...userData, roles: [UserRole.ADMIN] },
            },
        }),
    ],
};
export const PrimaryUser: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: { ...userData, roles: [UserRole.USER] },
            },
        }),
    ],
};
