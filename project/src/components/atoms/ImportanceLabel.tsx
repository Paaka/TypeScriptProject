import React, { FC } from 'react';
import styled from 'styled-components';
import allColors from '../../constants/allColors';

interface IImportanceLabel {
    priority: number;
    onClickFn?: (a: number, b: string) => void;
}

interface IColors {
    primaryColor: string;
    secondaryColor: string;
}

const Wrapper = styled.div<IColors>`
    width: 85px;
    height: 23px;
    color: white;
    background-image: linear-gradient(
        to right,
        ${({ primaryColor }) => primaryColor},
        ${({ secondaryColor }) => secondaryColor}
    );
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Montserrat', 'sans-serif';
`;

const ImportanceLabel: FC<IImportanceLabel> = ({
    priority,
    onClickFn = () => {},
}) => {
    const readPriority = () => {
        switch (priority) {
            case 1:
                return {
                    text: 'Low Priority',
                    primary: allColors.green,
                    secondary: allColors.gradientGreen,
                };
            case 2:
                return {
                    text: 'Med Priority',
                    primary: allColors.lightBlue,
                    secondary: allColors.mediumBlue,
                };
            case 3:
                return {
                    text: 'High Priority',
                    primary: allColors.pink,
                    secondary: allColors.pinkish,
                };
            default:
                return {
                    text: 'Low Priority',
                    primary: allColors.green,
                    secondary: allColors.gradientGreen,
                };
        }
    };

    const values = readPriority();

    const clickHandler = () => {
        onClickFn(priority, values.text);
    };

    return (
        <Wrapper
            onClick={clickHandler}
            primaryColor={values.primary}
            secondaryColor={values.secondary}
        >
            {values.text}
        </Wrapper>
    );
};

export default ImportanceLabel;
