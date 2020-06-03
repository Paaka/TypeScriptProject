import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Buttons/Button';
import allColors from '../../constants/allColors';
import Sizes from '../../constants/Sizes';
import MainInput from '../atoms/MainInput';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';
import DivImage from '../atoms/DivImage';

const Column = styled.div`
    height: 90vh;
    width: 24vw;
`;

interface IStyledButton {
    isFormOpen: boolean;
}

interface IItemForm {
    textValue: string;
    secondBtnText: string;
    onClickFn(a: string): Function | void;
}

const StyledButton = styled.div<IStyledButton>`
    cursor: pointer;
    width: 200px;
    height: ${(props) => (props.isFormOpen ? '6rem' : '2rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${allColors.listColor};
    margin: 10px auto 0;
    padding: 10px 0px;
    border-radius: 5px;
    z-index: 0;
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.listColor : 'rgba(0, 0, 0, 0.02)'};
    }

    &:active {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.listColor : 'rgba(0, 0, 0, 0.01)'};
    }
`;

const StyledText = styled.p`
    color: ${allColors.darkGrey};
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${Sizes.M};
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

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ItemForm: FC<IItemForm> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputedText, setInputedText] = useState('');

    const toggleModalHandler = () => {
        setIsOpen(!isOpen);
        setInputedText('');
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputedText(e.target.value);
    };

    const addListHandler = () => {
        props.onClickFn(inputedText);

        toggleModalHandler();
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
                            <Button onClick={addListHandler}>
                                {props.secondBtnText}
                            </Button>
                            <ButtonIcon
                                iconPath={require('../../assets/SVGs/close.svg')}
                                onClickFn={toggleModalHandler}
                            />
                        </RowWrapper>
                    </Wrapper>
                ) : (
                    <InputWrapper onClick={toggleModalHandler}>
                        <StyledText>{props.textValue}</StyledText>
                        <DivImage
                            height={15}
                            width={15}
                            mLeft={5}
                            imagePath={require('../../assets/SVGs/add.svg')}
                        />
                    </InputWrapper>
                )}
            </StyledButton>
        </Column>
    );
};

export default ItemForm;
