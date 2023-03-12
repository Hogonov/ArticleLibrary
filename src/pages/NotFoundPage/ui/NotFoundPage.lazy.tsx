import { lazy } from 'react';

// @ts-ignore
export const NotFoundPageLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./NotFoundPage'));
    }, 2000);
}));
