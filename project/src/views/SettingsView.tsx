import React, { FC } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import { RootState } from '../store/index';
import { logOutUser } from '../actions/index';
import MainTemplate from '../templates/MainTemplate';
import Axios from 'axios';
import styled from 'styled-components';
import allColors from '../constants/allColors';
import StyledH1 from '../components/atoms/Typography/StyledH1';
import LoginParagrph from '../components/organisms/LoginForm/LoginParagraph';
import StyledParagraph from '../components/atoms/Typography/StyledParagraph';
import Button from '../components/atoms/Buttons/Button';
import SettingsInput from '../components/atoms/SettingsInput';
import UserInfo from '../components/molecules/UserInfo';
import { IUser } from '../models/User';

interface ISettingsView {}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    background-color: ${allColors.lightGray};
`;

const PasswordContainer = styled.form`
    width: 40%;
    margin: 10px;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.orangeRed},
        ${allColors.orange}
    );
    height: 45vh;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: space-around;
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

const StyledBtn = styled.button`
    padding: 8px 20px;
    font-size: 20px;
    font-family: 'Montserrat', 'sans-serif';
    color: white;
    border: none;
    background-color: ${allColors.orange};
    margin-top: 20px;
    border-radius: 10px;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
        background-color: ${allColors.orangeDark};
        border-radius: 20px;
    }
`;

const SettingsView: FC<ISettingsView> = () => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const Token = useSelector((state) => state.token);
    const User = useSelector((state) => state.user);

    const logOutHandler = () => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.post('http://localhost:9000/users/logout', {}, { headers })
            .then((res) => dispatch(logOutUser()))
            .catch((err) => console.log(err));
    };

    return (
        <MainTemplate>
            <Wrapper>
                <UserInfo user={User}></UserInfo>
                <PasswordContainer>
                    <StyledH1 color="white">Change your password :</StyledH1>
                    <StyledInput placeholder="Current Password"></StyledInput>
                    <StyledInput placeholder="New Password"></StyledInput>
                    <StyledInput placeholder="New Password Again"></StyledInput>
                    <StyledBtn>Sumbit</StyledBtn>
                </PasswordContainer>
            </Wrapper>
        </MainTemplate>
    );
};

export default SettingsView;
