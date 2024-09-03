import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + 'import { Code } from \'./Code\';\n'
            + '\n'
            + 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'widgets/Code\',\n'
            + '    component: Code,\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {},\n'
            + '};\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof Code>;\n'
            + '\n'
            + 'export const Primary: Story = {};\n',
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
