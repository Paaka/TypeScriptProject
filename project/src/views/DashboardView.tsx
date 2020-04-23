import React, { FC } from 'react';
import MainTemplate from '../templates/MainTemplate';

interface IDashboardView {}

const DashboardView: FC<IDashboardView> = () => {
    return (
        <MainTemplate>
            <h1>DashboardView</h1>
        </MainTemplate>
    );
};

export default DashboardView;
