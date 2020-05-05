import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../constants/allColors';
import Sizes from '../../../constants/Sizes';

interface IStyledH1 {
    color?: string;
    size?: number;
    isLink?: boolean;
    children: string;
}

const StyledHeading = styled.h1<IStyledH1>`
    color: ${({ color }) => (color ? color : Colors.pinkish)};
    font-size: ${({ size }) => (size ? size + 'px' : Sizes.XXL)};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    cursor: default;
    text-decoration: none;
    margin: 0;
    &:visited {
        color: ${({ color }) => (color ? color : Colors.pinkish)};
        text-decoration: none;
    }
`;

const StyledH1: FC<IStyledH1> = ({ color, size, children }) => (
    <StyledHeading color={color} size={size}>
        {children}
    </StyledHeading>
);

export default StyledH1;
