import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { LoadingSpinner } from 'components/spinner';
import { SessionStatus } from 'constants/session-status';
import { useLoading } from 'hooks/use-loading';

const SContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 3rem;
`;

const SButton = styled.button`
    background: #bc75e7;
    padding: 1rem 2rem;
    width: 20rem;
    font-weight: bold;
    border-radius: 2rem;

    &:hover {
        background: #8b50af;
    }
`;
export const IndexView = () => {
    const { isLoading, loadingStart, loadingStop } = useLoading();
    const { push, query } = useRouter();

    const onSubmit = async () => {
        loadingStart();
        try {
            // FIXME: Add valid credentials to verify authorization
            const response = await signIn('credentials', {
                email: '',
                password: '',
                redirect: false,
            });

            if (response?.status === 401) {
                toast?.error?.('Email or password is not valid');
            }

            await push('/dashboard');
        } catch (err) {
            throw new Error(err as string);
        } finally {
            loadingStop();
        }
    };

    const session = useSession();

    useEffect(() => {
        if (session.status === SessionStatus.Authenticated) {
            push({
                pathname: '/dashboard',
                query,
            });
        }
    }, [session.data, session.status, push, query]);

    return (
        <SContainer>
            <LoadingSpinner isLoading={isLoading} />
            <h1>Welcome !</h1>
            <div>
                You are using <strong> Next 13 + graphql</strong> Boilerplate 🚀
            </div>
            <SButton onClick={onSubmit}>Authorize</SButton>
        </SContainer>
    );
};
