import React, { FC } from 'react';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';
import DivImage from '../../atoms/DivImage';

interface ILoginInput {
    iconPath: string;
    placeholderText: string;
    id: string;
}

const Wrapper = styled.div`
    width: 90%;
    border-bottom: 2px solid ${allColors.grey};
    padding-bottom: 10px;
`;

const StyledInput = styled.input`
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
    width: 90%;
    font-size: 18px;
    margin-left: 5px;
    font-weight: 600;

    &::placeholder {
        font-size: 14px;
    }
`;

const StyledLabel = styled.label`
    font-size: 14px;

    ${StyledInput}:focus ~ & {
        font-size: 14px;
        color: #5264ae;
    }
`;

const RowWrapper = styled.div`
    display: flex;
`;

const LoginInput: FC<ILoginInput> = ({ iconPath, placeholderText, id }) => {
    return (
        <Wrapper>
            <RowWrapper>
                <DivImage
                    height={25}
                    width={25}
                    imagePath={iconPath}
                ></DivImage>
                <StyledInput id={id} placeholder={placeholderText} />
                <StyledLabel htmlFor={id}>Hi</StyledLabel>
            </RowWrapper>
        </Wrapper>
    );
};

export default LoginInput;
