import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UnderlineBtn from '../atoms/Buttons/UnderlineBtn';
import Colors from '../../constants/allColors';
import StyledH1 from '../atoms/Typography/StyledH1';
import MarginWrapper from '../atoms/Utilities/MarginWrapper';

const Wrapper = styled.div`
    display: flex;
    height: 10vh;
    min-width: 100%;
    max-width: 999%;
    background-color: ${Colors.secodary};
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${Colors.dark};
`;

interface ISidebar {}

const Sidebar: FC<ISidebar> = (props) => {
    return (
        <Wrapper>
            <MarginWrapper left={10}>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <StyledH1>Kanban</StyledH1>
                </NavLink>
            </MarginWrapper>
            <div>
                <NavLink to="/Dashboards">
                    <UnderlineBtn onClickFn={() => {}}>Dashboards</UnderlineBtn>
                </NavLink>
                <NavLink to="/LogIn">
                    <UnderlineBtn onClickFn={() => {}}>Log In</UnderlineBtn>
                </NavLink>
            </div>
        </Wrapper>
    );
};

export default Sidebar;
