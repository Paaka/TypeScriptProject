import React from 'react';
import styled from 'styled-components';
import VerticalSidebarItem from './VerticalSidebarItem';
import allColors from '../../../constants/allColors';

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    width: 10vw;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    padding: 0;
    margin: 0;
`;

const TopWrapper = styled.div`
    height: 70vh;
`;

const BottomWrapper = styled.div`
    justify-self: center;
    margin-bottom: 10px;
`;

const VerticalSidebar = () => {
    return (
        <Sidebar>
            <TopWrapper>
                <VerticalSidebarItem
                    path="/"
                    color={allColors.lightBlue}
                    iconPath={require('../../../assets/SVGs/dashboardGrey.svg')}
                    iconPathActive={require('../../../assets/SVGs/dashboard.svg')}
                >
                    Boards
                </VerticalSidebarItem>
                <VerticalSidebarItem
                    path="/Schedule"
                    color={allColors.green}
                    iconPath={require('../../../assets/SVGs/calendar.svg')}
                    iconPathActive={require('../../../assets/SVGs/calendarGreen.svg')}
                >
                    Schedule
                </VerticalSidebarItem>
                <VerticalSidebarItem
                    path="/Raports"
                    color={allColors.pink}
                    iconPath={require('../../../assets/SVGs/statistics.svg')}
                    iconPathActive={require('../../../assets/SVGs/statisticsPink.svg')}
                >
                    Raports
                </VerticalSidebarItem>
            </TopWrapper>
            <BottomWrapper>
                <VerticalSidebarItem
                    path="/Settings"
                    color={allColors.orange}
                    iconPath={require('../../../assets/SVGs/settings.svg')}
                    iconPathActive={require('../../../assets/SVGs/settingsOrange.svg')}
                >
                    Settings
                </VerticalSidebarItem>
            </BottomWrapper>
        </Sidebar>
    );
};

export default VerticalSidebar;
