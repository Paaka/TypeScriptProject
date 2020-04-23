import React, { FC } from 'react';
import MainTemplate from '../templates/MainTemplate';

interface ILoginView {}

const LoginView: FC<ILoginView> = () => {
    return (
        <MainTemplate>
            <h1>LoginView</h1>
        </MainTemplate>
    );
};

export default LoginView;
