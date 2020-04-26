import React, { FC } from 'react';

import MainTemplate from '../templates/MainTemplate';
import DashboardItem from '../components/molecules/SingleItems/DashboardItem';
import styled from 'styled-components';

interface IDashboardView {}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const DashboardView: FC<IDashboardView> = () => {
    return (
        <MainTemplate>
            <Wrapper>
                <DashboardItem>Dashboard1</DashboardItem>
                <DashboardItem>Dashboard1</DashboardItem>
                <DashboardItem>Dashboard1</DashboardItem>
                <DashboardItem>Dashboard1</DashboardItem>
                <DashboardItem>Dashboard1</DashboardItem>
            </Wrapper>
        </MainTemplate>
    );
};

export default DashboardView;
