import React from 'react';
import styled from 'styled-components';
import allColors from '../constants/allColors';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.mediumBlue},
        ${allColors.lightBlue}
    );
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginWrapper = styled.div`
    height: 66vh;
    width: 25vw;
    background-color: white;
    border-radius: 2px;
    box-shadow: 5px 5px 20px -8px rgba(0, 0, 0, 1);
`;

const LoginView = () => {
    return (
        <Wrapper>
            <LoginWrapper>Welcome</LoginWrapper>
        </Wrapper>
    );
};

export default LoginView;
