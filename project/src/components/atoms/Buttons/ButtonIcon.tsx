import React, { FC } from 'react';
import styled from 'styled-components';

interface IStyledBtnIcon {
    iconPath: string;
    width?: number;
    height?: number;
}

interface IButtonIcon extends IStyledBtnIcon {
    onClickFn(): Function | void;
}

const BtnIcon = styled.div<IStyledBtnIcon>`
    box-sizing: content-box;
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    padding: 2px;
    background-image: url(${(props) => props.iconPath});
    background-position-x: center;
    background-position-y: center;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: ${({ width }) => width + 'px'};
    transition: all 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        cursor: pointer;
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.25);
    }
`;

const ButtonIcon: FC<IButtonIcon> = ({
    onClickFn,
    iconPath,
    width = 30,
    height = 30,
}) => {
    return (
        <BtnIcon
            onClick={onClickFn}
            iconPath={iconPath}
            width={width}
            height={height}
        />
    );
};

export default ButtonIcon;
