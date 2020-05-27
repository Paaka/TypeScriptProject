import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import StyledH1 from '../../atoms/Typography/StyledH1';
import allColors from '../../../constants/allColors';
import LoginInput from './LoginInput';
import LoginParagrph from './LoginParagraph';
import { logInUser } from '../../../actions';

const Wrapper = styled.div`
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

const FormItemsWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
    width: 100%;
`;

const StyledButton = styled.button`
    width: 90%;
    padding: 5px 0px;
    border: none;
    background-color: ${allColors.green};
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin-top: 3px;
    text-transform: uppercase;
    transition: background-color 0.2s;

    :hover {
        background-color: ${allColors.greenBlue};
    }
`;

const SignInForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, password, password2);
        if (password === password2) {
            axios
                .post('http://localhost:9000/users', {
                    email,
                    password,
                })
                .then((result) =>
                    dispatch(logInUser(result.data.user, result.data.token))
                )
                .catch((e) => console.log(e));
        }
    };

    const getEmailValue = (val: string) => {
        setEmail(val);
    };
    const getPassword = (val: string) => {
        setPassword(val);
    };

    const getPassword2 = (val: string) => {
        setPassword2(val);
    };

    return (
        <Wrapper>
            <div>
                <StyledH1 color={allColors.green}>Welcome</StyledH1>
                <StyledParagraph>Please, sign to continue</StyledParagraph>
            </div>
            <FormItemsWrapper onSubmit={submitHandler}>
                <LoginInput
                    getInputValue={getEmailValue}
                    color={allColors.green}
                    id="signInEmail"
                    iconPath={require('../../../assets/SVGs/email.svg')}
                    labelText="email"
                    placeholderText="Type your email..."
                    type="email"
                ></LoginInput>
                <LoginInput
                    getInputValue={getPassword}
                    color={allColors.green}
                    id="signInpassword1"
                    iconPath={require('../../../assets/SVGs/closed.svg')}
                    labelText="Password"
                    placeholderText="Type your password..."
                    type="password"
                ></LoginInput>
                <LoginInput
                    getInputValue={getPassword2}
                    color={allColors.green}
                    id="signInPassword2"
                    iconPath={require('../../../assets/SVGs/closed.svg')}
                    labelText="Password"
                    placeholderText="Confirm your password..."
                    type="password"
                ></LoginInput>
                <LoginParagrph
                    linkPath="/LogIn"
                    firstPart="Already have account ?"
                    secondPart="Log In here"
                    color={allColors.green}
                ></LoginParagrph>
                <StyledButton type="submit">Sign in</StyledButton>
            </FormItemsWrapper>
        </Wrapper>
    );
};

export default SignInForm;
