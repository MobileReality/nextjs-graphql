import { GetServerSidePropsContext } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { COMMON_TRANSLATIONS } from 'constants/translations';

type Props = {
    context: GetServerSidePropsContext;
    translationsNamespaces?: string[];
    props?: Record<string, any>;
    params?: Record<string, any>;
};

export const handleServerSideProps = async ({
    context,
    props,
    params,
    translationsNamespaces,
}: Props) => {
    const { locale } = context;

    return {
        ...params,
        props: {
            ...(await serverSideTranslations(
                locale as string,
                translationsNamespaces
                    ? [...COMMON_TRANSLATIONS, ...translationsNamespaces]
                    : COMMON_TRANSLATIONS,
            )),
            ...props,
        },
    };
};
