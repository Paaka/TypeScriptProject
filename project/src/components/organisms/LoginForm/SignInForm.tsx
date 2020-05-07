import React from 'react';
import styled from 'styled-components';
import StyledH1 from '../../atoms/Typography/StyledH1';
import allColors from '../../../constants/allColors';
import LoginInput from './LoginInput';
import LoginParagrph from './LoginParagraph';
import Button from '../../atoms/Buttons/Button';

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

const FormItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
    width: 100%;
`;

const StyledButton = styled(Button)`
    background-image: linear-gradient(
        to bottom right,
        ${allColors.greenBlue},
        ${allColors.borderGreen}
    );
    margin-top: 0px;
`;

const SignInForm = () => {
    return (
        <Wrapper>
            <div>
                <StyledH1 color={allColors.green}>Welcome</StyledH1>
                <StyledParagraph>Please, sign to continue</StyledParagraph>
            </div>
            <FormItemsWrapper>
                <LoginInput
                    color={allColors.green}
                    id="signInEmail"
                    iconPath={require('../../../assets/SVGs/email.svg')}
                    labelText="email"
                    placeholderText="Type your email..."
                ></LoginInput>
                <LoginInput
                    color={allColors.green}
                    id="signInEmail"
                    iconPath={require('../../../assets/SVGs/closed.svg')}
                    labelText="Password"
                    placeholderText="Type your password..."
                ></LoginInput>
                <LoginInput
                    color={allColors.green}
                    id="signInEmail"
                    iconPath={require('../../../assets/SVGs/closed.svg')}
                    labelText="Password"
                    placeholderText="Confirm your password..."
                ></LoginInput>
                <LoginParagrph
                    linkPath="/LogIn"
                    firstPart="Already have account ?"
                    secondPart="Log In here"
                    color={allColors.green}
                ></LoginParagrph>
                <StyledButton>Sign In</StyledButton>
            </FormItemsWrapper>
        </Wrapper>
    );
};

export default SignInForm;
