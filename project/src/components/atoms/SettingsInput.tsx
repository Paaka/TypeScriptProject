import React, { FC, useState } from 'react';
import styled from 'styled-components';
import StyledParagraph from './Typography/StyledParagraph';

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const StyledInput = styled.input`
    font-size: 16px;
    font-family: 'Montserrat', 'sans-serif';
    border: none;
    background-color: transparent;
    text-align: center;

    :focus {
        outline: none;
    }
`;

interface ISettingsInput {
    label: string;
    value: string;
    onChangeHandler: (newValue: string) => void;
}

const SettingsInput: FC<ISettingsInput> = ({
    label,
    value,
    onChangeHandler,
}) => {
    const [inputedValue, setInputedValue] = useState(value);

    const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e.target.value);
        setInputedValue(e.target.value);
    };

    return (
        <FlexWrapper>
            <StyledParagraph>{label}</StyledParagraph>
            <StyledInput
                value={inputedValue}
                onChange={onChangeFn}
            ></StyledInput>
        </FlexWrapper>
    );
};

export default SettingsInput;
