import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import NewDesignDecorator from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    args: {
        data: {
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
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};
export const PrimaryRedesigned: Story = {
    decorators: [NewDesignDecorator],
};

export const WithError: Story = {
    args: {
        error: 'Ошибка',
    },
};

export const WithLoading: Story = {
    args: {
        isLoading: true,
    },
};
