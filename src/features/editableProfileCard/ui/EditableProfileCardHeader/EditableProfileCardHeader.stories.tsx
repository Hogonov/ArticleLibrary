import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                first: 'Александр',
                lastname: 'Цыпляев',
                age: 24,
                currency: Currency.EUR,
                country: Country.Kazakhstan,
                city: 'Астана',
                username: 'admin',
                avatar: AvatarImg,
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
