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
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    background-image: url(${(props) => props.iconPath});
    background-position-x: center;
    background-position-y: center;
    background-color: transparent;
    background-repeat: no-repeat;
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
