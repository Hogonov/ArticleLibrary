import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
