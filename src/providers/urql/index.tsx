import React, { ReactNode, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { createClient, Provider } from 'urql';
import { LoadingSpinner } from 'components/spinner';
import { SessionStatus } from 'constants/session-status';
import { clientConfigLogged, clientConfigNonLogged } from 'lib/urql';

type Props = {
    children: ReactNode;
};

export const UrqlProvider = ({ children }: Props) => {
    const { status, data } = useSession();

    const client = useMemo(() => {
        if (status === SessionStatus.Authenticated && data?.token) {
            return createClient(clientConfigLogged(data.token));
        }

        return createClient(clientConfigNonLogged);
    }, [data?.token, status]);

    if (status === SessionStatus.Loading) {
        return (
            <Provider value={client}>
                <LoadingSpinner isLoading={true} fixed={true} />
            </Provider>
        );
    }
    return <Provider value={client}>{children}</Provider>;
};
