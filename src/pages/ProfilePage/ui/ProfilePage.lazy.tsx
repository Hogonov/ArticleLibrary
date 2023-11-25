import { lazy } from 'react';

// @ts-ignore
export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./ProfilePage'));
    }, 2000);
}));
