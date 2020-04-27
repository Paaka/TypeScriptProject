import React, { FC } from 'react';
import MainTemplate from '../templates/MainTemplate';

interface IScheduleView {}

const ScheduleView: FC<IScheduleView> = () => {
    return (
        <MainTemplate>
            <h1>ScheduleView</h1>
        </MainTemplate>
    );
};

export default ScheduleView;
