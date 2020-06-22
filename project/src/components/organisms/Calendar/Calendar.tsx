import React, { FC } from 'react';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { IBoard } from '../../../models/Board';
import { RootState } from '../../../store/index';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';
import { INote } from '../../../models/Note';
import StyledParagraph from '../../atoms/Typography/StyledParagraph';
import { Link } from 'react-router-dom';
import { IList } from '../../../models/List';

interface Column {
    row: number;
}

interface ICalendar {
    notes: INote[];
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
    height: 100%;
    grid-row: ${(props) => props.row};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${allColors.green};
    transition: all 0.2s;

    &:hover {
        background-color: ${allColors.greenBlue};
    }
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

const DeadlineItem = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
`;

const Calendar: FC<ICalendar> = ({ notes }) => {
    const nextDays: Array<Date> = [];
    const today = new Date();
    nextDays.push(today);

    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const boards: Array<IBoard> = useSelector((state) => state.dashboards);
    const lists: Array<IList> = useSelector((state) => state.lists);

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

    const getNoteLink = (noteId: string, listId: string) => {
        const [{ dashboardID }] = lists.filter((list) => list.ID === listId);
        const [{ id }] = boards.filter(({ id }) => id === dashboardID);

        return `/Boards/${id}/${noteId}`;
    };

    getNextFourDays(today);

    return (
        <Wrapper>
            <DayHeader> Tasks: </DayHeader>
            {nextDays.map((day, index) => (
                <DayHeader key={index}>{getCorrectDayFormat(day)}</DayHeader>
            ))}
            {notes.map((note, index) => (
                <>
                    <Link
                        to={getNoteLink(note.ID, note.ListID)}
                        style={{ textDecoration: 'none' }}
                    >
                        <LeftColumnItem row={index + 2}>
                            <StyledParagraph color="white">
                                {note.content}
                            </StyledParagraph>
                        </LeftColumnItem>
                    </Link>
                    {nextDays.map((day) => (
                        <DeadlineItem onClick={() => console.log(note)} />
                    ))}
                </>
            ))}
        </Wrapper>
    );
};

export default Calendar;
