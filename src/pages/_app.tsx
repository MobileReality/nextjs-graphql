import React from 'react';
import ReactModal from 'react-modal';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo, DefaultSeoProps } from 'components/default-seo';
import { Toast } from 'components/toast';
import { initAxe } from 'modules/axe';
import { ErrorHandler } from 'modules/error-app-handler';
import { SessionModal } from 'modules/session-handler';
import { UrqlProvider } from 'providers/urql';
import { Theme } from 'theme/Theme';

initAxe();

ReactModal.setAppElement('#__next');

const App = ({ Component, pageProps }: AppProps) => {
    const { title, description, keywords, metaTagImageUrl } =
        pageProps as DefaultSeoProps;
    return (
        <SessionProvider session={pageProps?.session}>
            <Theme>
                <ErrorHandler>
                    <NextNProgress
                        height={0.4}
                        color="#54A8FD"
                        options={{
                            showSpinner: false,
                        }}
                    />
                    <DefaultSeo
                        {...{ title, description, keywords, metaTagImageUrl }}
                    />
                    <Toast />
                    <UrqlProvider>
                        <SessionModal />
                        <Component {...pageProps} />
                    </UrqlProvider>
                </ErrorHandler>
            </Theme>
        </SessionProvider>
    );
};

export default appWithTranslation(App);
