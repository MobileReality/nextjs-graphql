// https://github.com/SamHerbert/SVG-Loaders/blob/master/svg-loaders/tail-spin.svg
import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';

const SSpinnerWrapper = styled.div<{ $fixed?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0 0 0 / 50%);
    z-index: 1;
    flex-direction: column;
    top: 0;
    left: 0;

    ${({ $fixed }) =>
        $fixed &&
        css`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        `};
`;

const SSpan = styled.span`
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.FONT.SIZE.SMALL};
`;

type Props = {
    isLoading: boolean;
    label?: string;
    fixed?: boolean;
    className?: string;
};

const Spinner = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={38}
            height={38}
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient
                    x1="8.042%"
                    y1="0%"
                    x2="65.682%"
                    y2="23.865%"
                    id="prefix__a"
                >
                    <stop stopColor="#eebf4f" stopOpacity={0} offset="0%" />
                    <stop
                        stopColor="#eebf4f"
                        stopOpacity={0.631}
                        offset="63.146%"
                    />
                    <stop stopColor="#eebf4f" offset="100%" />
                </linearGradient>
            </defs>
            <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    stroke="url(#prefix__a)"
                    strokeWidth={2}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </path>
                <circle fill="#eebf4f" cx={36} cy={18} r={1}>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    );
};

export const LoadingSpinner = ({
    label,
    isLoading,
    fixed,
    className,
}: Props) => {
    if (isLoading) {
        return (
            <SSpinnerWrapper $fixed={fixed} className={className}>
                <Spinner />
                {label && <SSpan>{label}</SSpan>}
            </SSpinnerWrapper>
        );
    }

    return null;
};
