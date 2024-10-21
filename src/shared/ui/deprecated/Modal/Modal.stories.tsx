import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children:
            'jdiw djwidhjiw jdwijdiwjd jdiwjidjw jdiwj idj w ndiwinaidnwa ndiwnadnwqaidn winai dni wnaidn wiand iwanid nwia ndi wa',
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
