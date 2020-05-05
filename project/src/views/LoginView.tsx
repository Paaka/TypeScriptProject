import React from 'react';
import styled from 'styled-components';
import allColors from '../constants/allColors';
import LoginForm from '../components/organisms/LoginForm/LoginForm';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.mediumBlue},
        ${allColors.borderLightBlue}
    );
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginView = () => {
    return (
        <Wrapper>
            <LoginForm></LoginForm>
        </Wrapper>
    );
};

export default LoginView;
