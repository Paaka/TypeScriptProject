import React, { FC, useState } from 'react';
import styled from 'styled-components';
import allColors from '../../constants/allColors';
import Button from '../atoms/Buttons/Button';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';

interface ITextarea {
    isOpen: Boolean;
}

interface IDescription {
    onClickFn: (a: string) => void;
    initialValue: string;
}

const StyledTextarea = styled.textarea<ITextarea>`
    width: 80%;
    height: ${({ isOpen }) => (isOpen ? '25vh' : '15vh')};
    background-color: ${allColors.lightGray};
    border: none;
    transition: all 0.25s;
    font-family: 'Montserrat', 'sans-serif';
    outline: none;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlexWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: flex-start;
    width: 80%;
`;

const Description: FC<IDescription> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(props.initialValue);

    const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const saveHandler = () => {
        toggleIsOpen();
        props.onClickFn(inputValue);
    };

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <StyledTextarea
                onChange={inputHandler}
                isOpen={isOpen}
                onFocus={toggleIsOpen}
                placeholder="Add more detailed description"
                value={inputValue}
            />
            {isOpen ? (
                <FlexWrapper>
                    <Button onClick={saveHandler}>Save</Button>
                    <ButtonIcon
                        iconPath={require('../../assets/SVGs/cancel.svg')}
                        onClickFn={toggleIsOpen}
                    />
                </FlexWrapper>
            ) : null}
        </Wrapper>
    );
};

export default Description;
