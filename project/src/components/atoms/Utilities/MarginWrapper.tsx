import React, { FC } from 'react';
import styled from 'styled-components';

interface IMarginWrapper {
    mRight?: number;
    mLeft?: number;
    mTop?: number;
    mBottom?: number;
    children: JSX.Element;
}

const Wrapper = styled.div.attrs((props) => {})`
    margin-left: ${({ left }) => (left ? left + 'px' : '0px')};
`;

export default Wrapper;
