import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { DefaultSeo as NextSeoDefault } from 'next-seo';
import { APP_URL } from 'constants/environment';

const FAVICON_PATH = '/assets/favicon/';
const BANNER_IMAGE_URL = `${APP_URL}/assets/images/meta/banner.webp`;

export type DefaultSeoProps = {
    title?: string;
    description?: string;
    keywords?: string;
    metaTagImageUrl?: string;
};

// FIXME: Modify content colors
const DEFAULT_ADDITIONAL_META_TAGS = [
    {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
    },
    {
        name: 'msapplication-TileColor',
        content: '#0b1a40',
    },
    {
        name: 'theme-color',
        content: '#ffffff',
    },
];

export const DefaultSeo = ({
    title,
    description,
    keywords,
    metaTagImageUrl,
}: DefaultSeoProps) => {
    const { t } = useTranslation('meta');
    const { query, asPath } = useRouter();
    const keywordsMetaTag =
        keywords && t(keywords)
            ? { name: 'keywords', content: t(keywords) }
            : undefined;

    const getMetaContent = (
        defaultTranslationKey: string,
        content?: string,
    ) => {
        return `${(content && t(content)) || t(defaultTranslationKey)} ${
            query.page ? `| ${t('page')} - ${query.page}` : ''
        }`;
    };

    return (
        <NextSeoDefault
            title={getMetaContent('main.title', title)}
            description={getMetaContent('main.description', description)}
            additionalMetaTags={
                keywordsMetaTag
                    ? [...DEFAULT_ADDITIONAL_META_TAGS, keywordsMetaTag]
                    : DEFAULT_ADDITIONAL_META_TAGS
            }
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: `${FAVICON_PATH}favicon.ico`,
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: `${FAVICON_PATH}apple-touch-icon.png`,
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: `${FAVICON_PATH}favicon-32x32.png`,
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: `${FAVICON_PATH}favicon-16x16.png`,
                },
                {
                    rel: 'manifest',
                    href: `${FAVICON_PATH}site.webmanifest`,
                },
            ]}
            openGraph={{
                url: `${APP_URL}${asPath}`,
                images: [
                    {
                        url: metaTagImageUrl || BANNER_IMAGE_URL,
                        width: 1200,
                        height: 630,
                    },
                ],
            }}
            canonical={`${APP_URL}${asPath}`}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    );
};
