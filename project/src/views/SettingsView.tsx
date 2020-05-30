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

interface ISettingsView {}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-around;
`;

const UserInfo = styled.div`
    width: 40%;
    margin: 10px;
    background-color: #f5f5f5;
    height: 85vh;
    border-radius: 30px;
    overflow: hidden;
`;

const PasswordContainer = styled.div`
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

const ColorHeading = styled.div`
    position: relative;
    height: 30%;
    width: 100%;
    border-bottom: 5px solid white;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.orange},
        ${allColors.orangeDark}
    );
`;

const UserPicture = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    bottom: -75px;
    background-color: ${allColors.darkGrey};
    left: 33%;
    background-size: 100px;
    background-image: url(${require('../assets/SVGs/user.svg')});
    border-radius: 50%;
    border: 5px solid white;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    z-index: 50;
`;

const UserInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 16%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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

    const logOutHandler = () => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.post('http://localhost:9000/users/logout', {}, { headers })
            .then((res) => dispatch(logOutUser()))
            .catch((err) => console.log(err));
    };

    return (
        <MainTemplate>
            <Wrapper>
                <UserInfo>
                    <ColorHeading>
                        <UserPicture></UserPicture>
                        {/* <BorderToUserPicture></BorderToUserPicture> */}
                    </ColorHeading>
                    <UserInfoWrapper>
                        <FlexWrapper>
                            <StyledParagraph>Username :</StyledParagraph>
                            <StyledInput value="M. Hartabus"></StyledInput>
                        </FlexWrapper>
                        <FlexWrapper>
                            <StyledParagraph>Email :</StyledParagraph>
                            <StyledInput value="Email@gmail.con"></StyledInput>
                        </FlexWrapper>
                        <StyledBtn onClick={logOutHandler}>Log out</StyledBtn>
                    </UserInfoWrapper>
                </UserInfo>
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
