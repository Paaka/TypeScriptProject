import React from 'react';
import allColors from '../constants/allColors';
import LoginForm from '../components/organisms/LoginForm/LoginForm';
import FormTemplate from '../templates/FormTemplate';

const LoginView = () => {
    return (
        <FormTemplate
            primaryColor={allColors.mediumBlue}
            secondaryColor={allColors.borderLightBlue}
        >
            <LoginForm></LoginForm>
        </FormTemplate>
    );
};

export default LoginView;
