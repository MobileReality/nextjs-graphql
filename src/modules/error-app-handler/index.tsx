import React, { ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'next-i18next';
import styled from 'styled-components';

const SErrorContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const SErrorMessage = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const SText = styled.div`
    text-align: center;
    color: white;
`;

const SHeader = styled.div`
    margin-bottom: 10px;
    text-align: center;
    color: white;
    text-decoration: underline;
`;

type State = {
    hasError: boolean;
    message: string;
};

type Props = WithTranslation & {
    children: ReactNode;
};

class _ErrorHandler extends React.Component<Props, State> {
    state = {
        hasError: false,
        message: '',
    };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, message: error.message };
    }

    public render() {
        const { hasError, message } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <SErrorContainer>
                    <SErrorMessage>
                        <SHeader>Error</SHeader>
                        <SText>{message}</SText>
                    </SErrorMessage>
                </SErrorContainer>
            );
        }
        return children;
    }
}

export const ErrorHandler = withTranslation()(_ErrorHandler);
