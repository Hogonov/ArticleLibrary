import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123213',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123213');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
