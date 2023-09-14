import { signOut } from 'next-auth/react';
import styled from 'styled-components';

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
    background: #e775bf;
    padding: 1rem 2rem;
    width: 20rem;
    font-weight: bold;
    border-radius: 2rem;

    &:hover {
        background: #bb5998;
    }
`;
export const DashboardView = () => {
    return (
        <SContainer>
            <h1> Dashboard 🚀</h1>
            <div>You have successfully setup-ed authorization, Congrats !</div>
            <SButton onClick={() => signOut()}>Log out</SButton>
        </SContainer>
    );
};
