import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        StoreDecorator({
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
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
