import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        value: 'item1',
        items: [
            { value: 'item1', content: 'Item 123' },
            { value: 'item2', content: 'Item 234' },
            { value: 'item3', content: 'Item 345' },
        ],
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {};

export const topLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
    },
};
