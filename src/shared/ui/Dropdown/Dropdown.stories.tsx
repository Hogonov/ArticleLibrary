import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
};
