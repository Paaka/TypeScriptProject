import React, { FC, useState } from 'react';
import styled from 'styled-components';
import allColors from '../../constants/allColors';
import StyledParagraph from '../atoms/Typography/StyledParagraph';

interface ITwoColors {
    primary: string;
    secondary: string;
    active: Boolean;
}

interface IItem extends ITwoColors {
    colorId: number;
    onClickFn: (id: number, primary: string, secondary: string) => void;
}

interface IColorForm {
    currentColor: number;
    primaryColor: string;
    secondaryColor: string;
    setColors: (
        activeColor: number,
        firstColor: string,
        secondColor: string
    ) => void;
}

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 20px;
`;

const ColorItem = styled.div<ITwoColors>`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-image: linear-gradient(
        to right bottom,
        ${({ primary }) => primary},
        ${({ secondary }) => secondary}
    );
    border: 2px solid ${({ active }) => (!active ? 'white' : 'royalblue')};
`;

const Item: FC<IItem> = (props) => {
    const onClickHandler = () => {
        props.onClickFn(props.colorId, props.primary, props.secondary);
    };

    return (
        <ColorItem
            active={props.active}
            onClick={onClickHandler}
            primary={props.primary}
            secondary={props.secondary}
        />
    );
};

const ColorsForm: FC<IColorForm> = (props) => {
    const activeItemHandler = (
        id: number,
        primary: string,
        secondary: string
    ) => {
        props.setColors(id, primary, secondary);
    };

    return (
        <Wrapper>
            <Item
                onClickFn={activeItemHandler}
                active={props.currentColor === 1}
                colorId={1}
                primary={allColors.lightBlue}
                secondary={allColors.mediumBlue}
            />
            <Item
                onClickFn={activeItemHandler}
                active={props.currentColor === 2}
                colorId={2}
                primary={allColors.orange}
                secondary={allColors.orangeRed}
            />
            <Item
                onClickFn={activeItemHandler}
                active={props.currentColor === 3}
                colorId={3}
                primary={allColors.green}
                secondary={allColors.gradientGreen}
            />
            <Item
                onClickFn={activeItemHandler}
                active={props.currentColor === 4}
                colorId={4}
                primary={allColors.purpule}
                secondary={allColors.pink}
            />
        </Wrapper>
    );
};

export default ColorsForm;
