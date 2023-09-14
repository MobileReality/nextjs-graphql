/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [ // FIXME: Add images domains
            'cdn.your-domain.com'
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    i18n,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
        });
        return config;
    },
    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
            // FIXME: Apply your app domain to implement www to non-www redirect (SEO)
            // {
            //     source: '/:path*',
            //     has: [{ type: 'host', value: 'www.your-domain.com' }],
            //     destination: 'https://your-domain/:path*',
            //     permanent: true,
            // },
        ];
    },
    sentry: {
        hideSourceMaps: true,
    },
});
