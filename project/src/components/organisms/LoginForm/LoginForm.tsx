import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../actions/index';
import StyledH1 from '../../atoms/Typography/StyledH1';
import allColors from '../../../constants/allColors';
import LoginInput from './LoginInput';
import LoginParagrph from './LoginParagraph';
import Axios from 'axios';

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
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 100%;
`;

const StyledButton = styled.button`
    width: 90%;
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

    :hover {
        background-color: ${allColors.mediumBlue};
    }
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (val: string) => {
        setEmail(val);
    };

    const getPassword = (val: string) => {
        setPassword(val);
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        Axios.post('http://localhost:9000/users/login', {
            email,
            password,
        })
            .then((res) => {
                const response = res.data;
                console.log(response);
                if (res.data.token) {
                    dispatch(logInUser(res.data.user, res.data.token));
                }
            })
            .catch((err) => console.log(err));
        console.log(email + password);
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
                        id="emailInput"
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
            </BottomWrapper>
        </LoginWrapper>
    );
};

export default LoginForm;
