import { GetServerSidePropsContext } from 'next';
import { DashboardView } from 'views/dashboard';
import { handleServerSideProps } from 'helpers/handle-server-side-props';

const DashboardPage = () => <DashboardView />;

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    return await handleServerSideProps({
        context,
    });
};

export default DashboardPage;
