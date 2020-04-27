import React from 'react';
import styled from 'styled-components';
import VerticalSidebarItem from './VerticalSidebarItem';
import allColors from '../../../constants/allColors';

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 80vh;
    width: 10vw;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    padding: 0;
    margin: 0;
`;

const VerticalSidebar = () => {
    return (
        <Sidebar>
            <VerticalSidebarItem
                path="/"
                color={allColors.lightBlue}
                iconPath={require('../../../assets/SVGs/dashboardGrey.svg')}
                iconPathActive={require('../../../assets/SVGs/dashboard.svg')}
            >
                Boards
            </VerticalSidebarItem>
            <VerticalSidebarItem
                path="/LogIn"
                color={allColors.green}
                iconPath={require('../../../assets/SVGs/calendar.svg')}
                iconPathActive={require('../../../assets/SVGs/calendarGreen.svg')}
            >
                Schedule
            </VerticalSidebarItem>
        </Sidebar>
    );
};

export default VerticalSidebar;
