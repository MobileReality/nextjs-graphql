import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-style';

type Props = {
    children: ReactNode;
};

// https://stackoverflow.com/questions/51566916/why-does-bootstrap-use-a-0-02px-difference-between-screen-size-thresholds-in-its
const OFFSET = 0.02;

export const theme = {
    COLORS: {
        WHITE: '#ffffff',
        BLACK: '#000000',
        ERROR: '#e02020',
        WARNING: '#ffab00',
        SUCCESS: '#36d671',
    },
    BREAKPOINTS: {
        XXSM: 400,
        XSM: 480,
        SM: 576,
        MD: 768,
        LG: 992,
        XL: 1200,
        XXL: 1400,
        XXXL: 1600,
    },
    MEDIA: {
        MAX_WIDTH: (breakpoint: number) =>
            `@media (max-width: ${breakpoint - OFFSET}px)`,
    },
    Z_INDEXES: {
        LOWEST: -30,
        LOWER: -20,
        LOW: -10,
        NORMAL: 1,
        MEDIUM: 10,
        HIGH: 20,
        HIGHER: 30,
        HIGHEST: 40,
    },
    FONT: {
        SIZE: {
            SMALLEST: '1rem',
            SMALLER: '1.2rem',
            SMALL: '1.4rem',
            REGULAR: '1.6rem',
            MEDIUM: '1.8rem',
            BIG: '2rem',
            BIGGER: '2.2rem',
            H3: '2.4rem',
            SMALLER_TITLE: '2.8rem',
            SMALL_TITLE: '3.6rem',
            TITLE: '4.2rem',
            BIG_TITLE: '5.8rem',
            BIGGEST_TITLE: '6rem',
        },
        WEIGHT: {
            THIN: '100',
            EXTRA_LIGHT: '200',
            LIGHT: '300',
            REGULAR: '400',
            MEDIUM: '500',
            SEMI_BOLD: '600',
            BOLD: '700',
            EXTRA_BOLD: '800',
            HEAVY: '900',
        },
    },
};

export const Theme = ({ children }: Props) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);
