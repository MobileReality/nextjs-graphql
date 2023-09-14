import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { handleGetStaticProps } from 'helpers/handle-get-static-props';

const Page500 = () => {
    const { t } = useTranslation('errors');

    return <h1>{t('somethingWentWrong')} </h1>;
};

export const getStaticProps: GetStaticProps = async (context) => {
    return await handleGetStaticProps({
        context,
    });
};

export default Page500;
