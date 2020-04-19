import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Buttons/Button';
import allColors from '../../constants/allColors';
import Sizes from '../../constants/Sizes';
import MainInput from '../atoms/MainInput';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';

const Column = styled.div`
    height: 100%;
    width: 100%;
`;

interface IStyledButton {
    isFormOpen: boolean;
}

const StyledButton = styled.div<IStyledButton>`
    cursor: pointer;
    width: 200px;
    height: ${(props) => (props.isFormOpen ? '6rem' : '2rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        props.isFormOpen ? allColors.light : 'rgba(0, 0, 0, 0.3)'};
    margin: 10px auto 0;
    padding: 10px 0px;
    border-radius: 5px;
    z-index: 0;
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.light : 'rgba(0, 0, 0, 0.2)'};
    }

    &:active {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.light : 'rgba(0, 0, 0, 0.1)'};
    }
`;

const StyledText = styled.p`
    color: ${allColors.light};
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${Sizes.L};
`;

const RowWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormForList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputedText, setInputedText] = useState('');

    const onClickHandler = () => {
        setIsOpen(!isOpen);
        setInputedText('');
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputedText(e.target.value);
    };

    const addListHandler = () => {
        console.log(inputedText);
        onClickHandler();
    };

    return (
        <Column>
            <StyledButton isFormOpen={isOpen}>
                {isOpen ? (
                    <Wrapper>
                        <MainInput
                            value={inputedText}
                            onChange={onTextChange}
                            isForm
                            type="text"
                        ></MainInput>
                        <RowWrapper>
                            <Button onClick={addListHandler}>Add List</Button>
                            <ButtonIcon
                                iconPath={require('../../assets/SVGs/error.svg')}
                                onClickFn={onClickHandler}
                            />
                        </RowWrapper>
                    </Wrapper>
                ) : (
                    <div onClick={onClickHandler}>
                        <StyledText>+ Add new list</StyledText>
                    </div>
                )}
            </StyledButton>
        </Column>
    );
};

export default FormForList;
