import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/allColors';
import Sizes from '../../constants/Sizes';

interface IUnderlineBtn {
    onClickFn(): Function | void;
    children?: string;
}

const StyledButton = styled.button`
    padding: 5px 20px;
    background-color: ${Colors.secodary};
    color: ${Colors.light};
    font-size: ${Sizes.L};
    border: none;
    cursor: pointer;
    transition: 0.2s all;
    outline: none;

    &:hover {
        border-bottom: 3px solid ${Colors.pinkish};
    }
    &:active {
        color: ${Colors.pinkish};
    }
`;

const UnderlineBtn: FC<IUnderlineBtn> = ({ onClickFn, children }) => {
    const onClickHandler = () => {
        onClickFn();
    };
    return <StyledButton onClick={onClickHandler}>{children}</StyledButton>;
};

export default UnderlineBtn;
