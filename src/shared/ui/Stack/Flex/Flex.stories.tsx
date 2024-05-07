import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {},
};
export const RowGap4: Story = {
    args: {
        gap: '4',
    },
};
export const RowGap8: Story = {
    args: {
        gap: '8',
    },
};
export const RowGap16: Story = {
    args: {
        gap: '16',
    },
};
export const Column: Story = {
    args: {
        direction: 'column',
    },
};
export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
    },
};
export const ColumnAlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
    },
};
