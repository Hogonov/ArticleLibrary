import { lazy } from 'react';

// @ts-ignore
export const MainPageLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./MainPage'));
    }, 2000);
}));
