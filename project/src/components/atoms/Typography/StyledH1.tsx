import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../constants/allColors';
import Sizes from '../../../constants/Sizes';

interface IStyledH1 {
    color?: string;
    size?: string;
    isLink?: boolean;
    children: string;
}

const StyledHeading = styled.h1`
    color: ${({ color }) => (color ? color : Colors.pinkish)};
    font-size: ${Sizes.XXL};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    cursor: default;
    text-decoration: none;

    &:visited {
        color: ${({ color }) => (color ? color : Colors.pinkish)};
        text-decoration: none;
    }
`;

const StyledH1: FC<IStyledH1> = ({ color, size, isLink, children }) => (
    <StyledHeading color={color}>{children}</StyledHeading>
);

export default StyledH1;
