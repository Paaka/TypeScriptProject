import React from 'react';
import styled from 'styled-components';
import StyledH1 from '../../atoms/Typography/StyledH1';
import allColors from '../../../constants/allColors';
import LoginInput from './LoginInput';
import Button from '../../atoms/Buttons/Button';
import LoginParagrph from './LoginParagraph';

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

const LoginForm = () => {
    return (
        <LoginWrapper>
            <div>
                <StyledH1 size={28} color={allColors.lightBlue}>
                    {'Welcome'}
                </StyledH1>
                <StyledParagraph>Please Login to continue</StyledParagraph>
            </div>
            <BottomWrapper>
                <LoginInput
                    color="royalblue"
                    labelText="Email"
                    id="emailInput"
                    placeholderText="Type your email..."
                    iconPath={require('../../../assets/SVGs/email.svg')}
                />
                <LoginInput
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
                    linkPath="/"
                />
                <Button secondary>Log In</Button>
            </BottomWrapper>
        </LoginWrapper>
    );
};

export default LoginForm;
