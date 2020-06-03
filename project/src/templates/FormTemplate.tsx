import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<IFormTemplate>`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        ${({ primaryColor }) => primaryColor},
        ${({ secondaryColor }) => secondaryColor}
    );
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IFormTemplate {
    primaryColor: string;
    secondaryColor: string;
    children?: JSX.Element;
}

const FormTemplate: FC<IFormTemplate> = ({
    primaryColor,
    secondaryColor,
    children,
}) => {
    return (
        <Wrapper primaryColor={primaryColor} secondaryColor={secondaryColor}>
            {children}
        </Wrapper>
    );
};

export default FormTemplate;
