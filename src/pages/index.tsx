import { GetServerSidePropsContext } from 'next';
import { IndexView } from 'views/index';
import { handleServerSideProps } from 'helpers/handle-server-side-props';

const IndexPage = () => <IndexView />;

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    return await handleServerSideProps({
        context,
    });
};

export default IndexPage;
