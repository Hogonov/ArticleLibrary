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
            { value: 'item1', content: 'Item 1' },
            { value: 'item2', content: 'Item 2' },
            { value: 'item3', content: 'Item 3' },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
};
