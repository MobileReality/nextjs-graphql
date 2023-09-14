import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import styled, { css } from 'styled-components';
import { modalStyles } from 'styles/modal-styles';

type Props = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
    isRightSide?: boolean;
    className?: string;
};

const SContainer = styled.div<{ isRightSide?: boolean }>`
    ${({ isRightSide }) =>
        isRightSide
            ? css`
                  margin-left: auto;
              `
            : css`
                  margin: auto;
              `};
`;

export const StyledModal = ({
    isOpen,
    onRequestClose,
    children,
    isRightSide = false,
    className,
}: Props) => {
    return (
        <Modal
            isOpen={isOpen}
            style={{
                ...modalStyles,
                overlay: {
                    ...modalStyles.overlay,
                },
            }}
            contentLabel="Modal"
            ariaHideApp={false}
            shouldCloseOnOverlayClick={false}
            onRequestClose={onRequestClose}
        >
            <SContainer isRightSide={isRightSide} className={className}>
                {children}
            </SContainer>
        </Modal>
    );
};
