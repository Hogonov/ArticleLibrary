import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {};
