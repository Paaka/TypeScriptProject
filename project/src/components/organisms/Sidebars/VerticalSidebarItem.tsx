import React, { FC, useState } from 'react';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';
import { NavLink, useLocation } from 'react-router-dom';

interface IVerticalSidebarItem {
    children: string;
    iconPath: string;
    iconPathActive: string;
    color: string;
    path: string;
}

interface IColor {
    color: string;
    isActive: boolean;
}

interface IPath {
    iconPath: string;
}
const HighlightWrapper = styled.div<IColor>`
    width: 3px;
    height: 100%;
    transform: translateX(${({ isActive }) => (isActive ? '0%' : '-100%')});
    background-color: ${({ color }) => color};
    transition: all 0.2s;
`;

const StlyedText = styled.p`
    font-family: arial;
    font-size: 14px;
    color: ${allColors.secodary};
    margin: 0;
    transition: color 0.2s;
    cursor: pointer;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 13vh;
    display: flex;
    margin-top: 2px;

    &:hover ${HighlightWrapper} {
        transform: translateX(0%);
    }

    &:hover ${StlyedText} {
        color: ${(props) => props.color};
    }
`;

const IconAndTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: background 0.2s;
`;

const IconDiv = styled.div<IPath>`
    width: 32px;
    height: 32px;
    background-image: url(${(props) => props.iconPath});
    background-size: cover;
    margin-bottom: 5px;
`;

const VerticalSidebarItem: FC<IVerticalSidebarItem> = ({
    iconPathActive,
    iconPath,
    color,
    path,
    children,
}) => {
    const [isActive, setIsActive] = useState(useLocation().pathname === path);

    return (
        <NavLink
            to={path}
            style={{ textDecoration: 'none' }}
            activeClassName="hi"
        >
            <Wrapper color={color}>
                <HighlightWrapper
                    isActive={isActive}
                    className="higlightWrapper"
                    color={color}
                />
                <IconAndTextWrapper>
                    <IconDiv
                        iconPath={isActive ? iconPathActive : iconPath}
                    ></IconDiv>
                    <StlyedText>{children}</StlyedText>
                </IconAndTextWrapper>
            </Wrapper>
        </NavLink>
    );
};

export default VerticalSidebarItem;
