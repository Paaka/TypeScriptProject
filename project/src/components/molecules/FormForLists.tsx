import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/atoms/Button';
import allColors from '../../constants/allColors';
import Sizes from '../../constants/Sizes';

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
    height: ${(props) => (props.isFormOpen ? '10rem' : '2rem')};
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

const FormForList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Column>
            <StyledButton isFormOpen={isOpen}>
                {isOpen ? (
                    <div>
                        <input type="text"></input>
                        <div>
                            <Button onClick={onClickHandler}>Add List</Button>
                        </div>
                    </div>
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
