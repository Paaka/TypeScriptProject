import React, { FC } from 'react';
import styled from 'styled-components';
import allColors from '../../constants/allColors';
import SettingsInput from '../atoms/SettingsInput';
import { IUser } from '../../models/User';

const Wrapper = styled.div`
    width: 40%;
    margin: 10px;
    background-color: #f5f5f5;
    height: 85vh;
    border-radius: 30px;
    overflow: hidden;
`;

const ColorHeading = styled.div`
    position: relative;
    height: 30%;
    width: 100%;
    border-bottom: 5px solid white;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.orange},
        ${allColors.orangeRed}
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
    background-image: url(${require('../../assets/SVGs/user.svg')});
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

interface IUserInfo {
    user: any;
    logOutFn: () => void;
}

const UserInfo: FC<IUserInfo> = ({ user, logOutFn }) => {
    const changeEmail = (newEmail: String) => {
        console.log(newEmail);
    };

    const changeUsername = (newName: String) => {
        console.log(newName);
    };

    const logOutHandler = () => {
        logOutFn();
    };

    return (
        <Wrapper>
            <ColorHeading>
                <UserPicture></UserPicture>
            </ColorHeading>
            <UserInfoWrapper>
                <SettingsInput
                    label="Username :"
                    value={user.name}
                    onChangeHandler={changeUsername}
                ></SettingsInput>
                <SettingsInput
                    label="Email :"
                    value={user.email}
                    onChangeHandler={changeEmail}
                ></SettingsInput>
                <StyledBtn onClick={logOutHandler}>Log out</StyledBtn>
            </UserInfoWrapper>
        </Wrapper>
    );
};

export default UserInfo;
