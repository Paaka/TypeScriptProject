import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../actions/index';
import StyledH1 from '../../atoms/Typography/StyledH1';
import allColors from '../../../constants/allColors';
import LoginInput from './LoginInput';
import LoginParagrph from './LoginParagraph';
import Axios from 'axios';
import { backendURL } from '../../../constants/url';
import UserMessage from '../../atoms/UserMessage/UserMessage';

interface IError {
    visible: boolean;
}

const LoginWrapper = styled.div`
    height: 70vh;
    width: 25vw;
    background-color: white;
    border-radius: 2px;
    padding: 20px;
    box-shadow: 5px 5px 20px -8px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledParagraph = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: ${allColors.darkGrey};
    margin-left: 5px;
    margin-top: 10px;
`;

const BottomWrapper = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    height: 70%;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 5px 0px;
    border: none;
    background-color: ${allColors.lightBlue};
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    text-transform: uppercase;
    transition: background-color 0.2s;
    outline: none;

    :hover {
        background-color: ${allColors.mediumBlue};
    }

    :active {
        outline: none;
    }
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUserMessageVisible, setIsUserMessageVisible] = useState(false);
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
    const [userMessage, setUserMessage] = useState('Login successfully');

    const getEmail = (val: string) => {
        setEmail(val);
    };

    const getPassword = (val: string) => {
        setPassword(val);
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        Axios.post(`${backendURL}/users/login`, {
            email,
            password,
        })
            .then((res) => {
                setIsUserMessageVisible(true);
                setIsLoginSuccessful(true);
                setUserMessage('Login successfully');
                return res;
            })
            .then((res) => {
                setTimeout(() => {
                    if (res.data.token) {
                        dispatch(logInUser(res.data.user, res.data.token));
                    }
                }, 1000);
            })
            .catch((err) => {
                setIsUserMessageVisible(true);
                setUserMessage('Incorrect email or password');
            });
    };

    return (
        <LoginWrapper>
            <div>
                <StyledH1 size={28} color={allColors.lightBlue}>
                    {'Welcome'}
                </StyledH1>

                <StyledParagraph>Please Login to continue</StyledParagraph>
            </div>
            <BottomWrapper>
                <form onSubmit={onSubmitHandler}>
                    <LoginInput
                        getInputValue={getEmail}
                        color="royalblue"
                        labelText="Email"
                        id="emailInput"
                        placeholderText="Type your email..."
                        iconPath={require('../../../assets/SVGs/email.svg')}
                    />
                    <LoginInput
                        getInputValue={getPassword}
                        type="password"
                        color="royalblue"
                        labelText="Password"
                        id="passwordInput"
                        placeholderText="Type your password..."
                        iconPath={require('../../../assets/SVGs/closed.svg')}
                    />
                    <LoginParagrph
                        color="royalblue"
                        firstPart="Don't have an account ? "
                        secondPart="Sign In Here"
                        linkPath="/SignIn"
                    />
                    <StyledButton type="submit">LogIn</StyledButton>
                </form>
                <UserMessage
                    success={isLoginSuccessful}
                    visible={isUserMessageVisible}
                    message={userMessage}
                ></UserMessage>
            </BottomWrapper>
        </LoginWrapper>
    );
};

export default LoginForm;
