import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 20vw;
    height: 5vw;
    align-items: center;
    margin-left: 25px;
`;
const StyledInput = styled.input`
    width: 50%;
    background-color: white;
    color: ${(props) => props.color};
    outline: none;
    border: none;
    height: 20px;
    padding: 5px 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: width 0.4s;

    &::placeholder {
        color: ${(props) => props.color};
    }
    &:focus {
        background-color: white;
        width: 100%;
    }
`;

const MagnifierIcon = styled.div`
    width: 26px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 16px;
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    padding-left: 5px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: url(${require('../../assets/SVGs/searchBlue.svg')});
`;

interface ISearchInput {
    color: string;
}

const SearchInput: FC<ISearchInput> = (props) => {
    return (
        <Wrapper>
            <MagnifierIcon></MagnifierIcon>
            <StyledInput
                color={props.color}
                placeholder="Search for tasks..."
            />
        </Wrapper>
    );
};

export default SearchInput;
