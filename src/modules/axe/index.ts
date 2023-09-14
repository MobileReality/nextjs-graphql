/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { isClient } from 'utils/is-client';

export const initAxe = () => {
    if (process.env.NODE_ENV !== 'production' && isClient) {
        import('react-dom').then((ReactDOM) => {
            import('@axe-core/react').then((axe) => {
                axe.default(React, ReactDOM, 1000, {});
            });
        });
    }
};
