import * as Sentry from '@sentry/nextjs';
import { SENTRY_DSN } from './src/constants/environment';

Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    enabled: process.env.NODE_ENV === 'production',
});
