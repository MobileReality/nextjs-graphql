import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { StyledModal } from 'components/styled-modal';
import { expiredEvent, expiredStorageKey } from 'lib/urql';

const SContainer = styled.div`
    padding: 4rem;
    border-radius: 1.6rem;
    max-width: 65rem;
    text-align: center;
`;

const SHeader = styled.h1`
    font-size: ${({ theme }) => theme.FONT.SIZE.BIGGER};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    margin-bottom: 2rem;
`;

export const SessionModal = () => {
    const [isExpired, setIsExpired] = useState(false);
    const { t } = useTranslation('errors');
    const { status } = useSession();

    useEffect(() => {
        const listenStorageChange = () => {
            const isExpiredValue =
                window?.localStorage.getItem(expiredStorageKey);
            if (isExpiredValue === 'true') {
                setIsExpired(true);
            }
        };
        window.addEventListener(expiredEvent, listenStorageChange);
        return () =>
            window.removeEventListener(expiredEvent, listenStorageChange);
    }, []);

    const handleLogout = async () => {
        window.localStorage.removeItem(expiredStorageKey);
        setIsExpired(false);
        await signOut();
    };

    const isOpen = isExpired && status !== 'loading';

    return (
        <StyledModal isOpen={isOpen} onRequestClose={() => setIsExpired(false)}>
            <SContainer>
                <SHeader>{t('invalidSession')}</SHeader>
                <button type="button" onClick={handleLogout}>
                    {t('gotToLogin')}
                </button>
            </SContainer>
        </StyledModal>
    );
};
