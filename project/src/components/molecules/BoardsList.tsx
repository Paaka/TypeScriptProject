import React, { FC, useState } from 'react';
import styled from 'styled-components';

interface IBoardsList {
    children: string;
    updateTitleHandler: (newTitle: string) => void;
}

interface Iactive {
    isActive: boolean;
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    position: absolute;
    top: 2px;
    left: 11vw;
`;

const StyledText = styled.input`
    font-size: 30px;
    background-color: transparent;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-top: 5px;

    &:focus {
        outline: none;
        border: none;
    }
`;

const BoardsList: FC<IBoardsList> = (props) => {
    const [inputedText, setInputedText] = useState(props.children);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateTitleHandler(e.target.value);
        setInputedText(e.target.value);
    };

    return (
        <Wrapper>
            <StyledText value={inputedText} onChange={onChangeHandler} />
        </Wrapper>
    );
};

export default BoardsList;
