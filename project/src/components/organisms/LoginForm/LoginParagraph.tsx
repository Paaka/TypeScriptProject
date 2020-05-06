import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ILoginParagraph {
    color: string;
    linkPath: string;
    firstPart: string;
    secondPart: string;
}

interface IStyledP {
    isBold?: boolean;
    color?: string;
}

const StyledP = styled.p<IStyledP>`
    text-align: center;
    font-weight: 400;
    padding: 0;
    margin: 2px;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;

    ${(isBold) =>
        isBold &&
        css`
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 10px;
        `}
`;

const LoginParagrph: FC<ILoginParagraph> = ({
    linkPath,
    secondPart,
    firstPart,
    color,
}) => {
    return (
        <StyledP>
            {firstPart}
            <Link to={linkPath} style={{ textDecoration: 'none', color }}>
                <StyledP isBold color={color}>
                    {secondPart}
                </StyledP>
            </Link>
        </StyledP>
    );
};

export default LoginParagrph;
