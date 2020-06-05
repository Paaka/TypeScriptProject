import React, { FC } from 'react';
import MainTemplate from '../templates/MainTemplate';
import Calendar from '../components/organisms/Calendar/Calendar';

interface IScheduleView {}

const ScheduleView: FC<IScheduleView> = () => {
    return (
        <MainTemplate>
            <Calendar />
        </MainTemplate>
    );
};

export default ScheduleView;
