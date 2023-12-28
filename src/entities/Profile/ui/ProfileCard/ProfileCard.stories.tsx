import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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
