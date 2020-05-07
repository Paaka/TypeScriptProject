import React from 'react';
import FormTemplate from '../templates/FormTemplate';
import allColors from '../constants/allColors';
import SignInForm from '../components/organisms/LoginForm/SignInForm';

const SignInView = () => {
    return (
        <FormTemplate
            primaryColor={allColors.greenBlue}
            secondaryColor={allColors.green}
        >
            <SignInForm></SignInForm>
        </FormTemplate>
    );
};

export default SignInView;
