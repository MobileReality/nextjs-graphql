import * as Sentry from '@sentry/nextjs';
import { SENTRY_DSN } from './src/constants/environment';

Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1,
    enabled: process.env.NODE_ENV === 'production',
});
