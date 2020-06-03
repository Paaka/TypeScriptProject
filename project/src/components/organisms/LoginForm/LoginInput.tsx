import React, { FC } from 'react';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';
import DivImage from '../../atoms/DivImage';

interface ILoginInput {
    iconPath: string;
    placeholderText: string;
    id: string;
    labelText: string;
    color: string;
    type?: string;
    getInputValue: (val: string) => void;
}

const Wrapper = styled.div`
    width: 90%;
    border-bottom: 2px solid ${allColors.grey};
    padding-bottom: 10px;
    margin-bottom: 15px;
`;

const StyledInput = styled.input`
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
    width: 85%;
    font-size: 18px;
    margin-left: 5px;
    font-weight: 600;

    &::placeholder {
        font-size: 14px;
    }
`;

const StyledLabel = styled.label`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-left: 5px;
    color: ${allColors.darkGrey};
    transition: color 0.25s;

    ${StyledInput}:focus ~ & {
        color: ${({ color }) => color};
    }
`;

const RowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const InputAndLabelWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-left: 2px;
`;

const LoginInput: FC<ILoginInput> = ({
    iconPath,
    placeholderText,
    labelText,
    id,
    type,
    color,
    getInputValue,
}) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        getInputValue(e.target.value);
    };

    return (
        <Wrapper>
            <RowWrapper>
                <DivImage
                    pHorizontal={12}
                    height={20}
                    width={20}
                    bgSize={21}
                    imagePath={iconPath}
                ></DivImage>
                <InputAndLabelWrapper>
                    <StyledInput
                        type={type}
                        id={id}
                        placeholder={placeholderText}
                        onChange={onChangeHandler}
                    />
                    <StyledLabel color={color} htmlFor={id}>
                        {labelText}
                    </StyledLabel>
                </InputAndLabelWrapper>
            </RowWrapper>
        </Wrapper>
    );
};

export default LoginInput;
