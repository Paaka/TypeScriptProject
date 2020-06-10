import React, { FC, useEffect, useState } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../store/index';

import MainTemplate from '../templates/MainTemplate';
import Calendar from '../components/organisms/Calendar/Calendar';
import Spinner from '../components/atoms/Spinner/Spinner';
import Axios from 'axios';
import { backendURL } from '../constants/url';
import { addNote } from '../actions';

interface IScheduleView {}

const ScheduleView: FC<IScheduleView> = () => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    const Token = useSelector((state) => state.token);
    const Notes = useSelector((state) => state.notes);
    const headers = { Authorization: `Bearer ${Token}` };

    const fetchNotes = async () => {
        return await Axios.get(`${backendURL}/notes`, { headers });
    };

    useEffect(() => {
        fetchNotes().then(({ data }) => {
            if (data.length > Notes.length) {
                data.forEach((note: any) => {
                    dispatch(
                        addNote(
                            note._id,
                            note.listID,
                            note.content,
                            note.priority,
                            note.description,
                            note.deadline
                        )
                    );
                });
            }

            setIsContentLoaded(true);
        });
    }, []);

    return (
        <MainTemplate>
            {isContentLoaded ? <Calendar notes={Notes} /> : <Spinner />}
        </MainTemplate>
    );
};

export default ScheduleView;
