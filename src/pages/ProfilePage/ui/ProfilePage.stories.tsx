import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
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
export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
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
