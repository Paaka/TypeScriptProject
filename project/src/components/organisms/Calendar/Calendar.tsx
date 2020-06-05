import React from 'react';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import { RootState } from '../../../store/index';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';

interface Column {
    row: number;
}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 50px);
    background-color: #eee;
    padding: 5px;
    grid-gap: 2px;
`;

const LeftColumnItem = styled.div<Column>`
    grid-row: ${(props) => props.row};
`;

const DayHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${allColors.greenBlue};
    font-family: 'Montserrat', 'sans-serif';
    font-size: 20px;
    color: white;
`;

const Calendar = () => {
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const notes = useSelector((state) => state.notes);
    const nextDays: Array<Date> = [];
    const today = new Date();
    nextDays.push(today);

    const getNextFourDays = (today: Date) => {
        for (let i = 1; i <= 4; i++) {
            const newDay = new Date();
            newDay.setDate(today.getDate() + i);
            nextDays.push(newDay);
        }
    };

    const getCorrectDayFormat = (day: Date) => {
        const Weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        const month = day.getMonth() + 1;
        const formatWithZero = (day: number) => (day < 10 ? `0${day}` : day);

        return `${Weekdays[day.getDay()]}, 
                ${formatWithZero(day.getDate())}.${formatWithZero(month)}`;
    };

    getNextFourDays(today);

    return (
        <Wrapper>
            <DayHeader> Tasks: </DayHeader>
            {nextDays.map((day, index) => (
                <DayHeader key={index}>{getCorrectDayFormat(day)}</DayHeader>
            ))}
            {console.log(notes)}
        </Wrapper>
    );
};

export default Calendar;
