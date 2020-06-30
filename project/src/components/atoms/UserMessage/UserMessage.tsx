import React, { FC } from 'react';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';

interface IError {
    visible: boolean;
    success: boolean;
}

interface IUserMessage extends IError {
    message: string;
}

const Warning = styled.div<IError>`
    background-color: ${({ success }) =>
        success ? allColors.green : allColors.pinkish};
    margin-top: 20px;
    font-size: 16px;
    padding: 10px;
    border-radius: 12px;
    color: white;
    border: 1px solid
        ${({ success }) => (success ? allColors.greenBlue : allColors.pinkDark)};
    font-family: 'Montserrat', 'sans-serif';
    transition: opacity 0.1s ease-in;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
`;

const UserMessage: FC<IUserMessage> = ({ visible, success, message }) => (
    <Warning success={success} visible={visible}>
        {message}
    </Warning>
);

export default UserMessage;
