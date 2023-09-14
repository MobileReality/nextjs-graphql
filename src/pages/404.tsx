import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { handleGetStaticProps } from 'helpers/handle-get-static-props';

const Page404 = () => {
    const { t } = useTranslation('errors');

    return <h1>{t('notFound')} ⚠️ </h1>;
};

export const getStaticProps: GetStaticProps = async (context) => {
    return await handleGetStaticProps({
        context,
        translationsNamespaces: ['errors'],
    });
};

export default Page404;
