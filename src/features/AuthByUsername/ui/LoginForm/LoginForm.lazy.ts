import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    () => new Promise((resolve) => {
        setTimeout(() => {
        // @ts-ignore
            resolve(import('./LoginForm'));
        }, 2000);
    }),
);
