import React, { FC } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import { RootState } from '../store/index';
import { logOutUser } from '../actions/index';
import MainTemplate from '../templates/MainTemplate';
import Axios from 'axios';

interface ISettingsView {}

const SettingsView: FC<ISettingsView> = () => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const Token = useSelector((state) => state.token);

    const logOutHandler = () => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.post('http://localhost:9000/users/logout', {}, { headers })
            .then((res) => dispatch(logOutUser()))
            .catch((err) => console.log(err));
    };

    return (
        <MainTemplate>
            <div>
                <h1>SettingsView</h1>
                <button onClick={logOutHandler}>Log out</button>
            </div>
        </MainTemplate>
    );
};

export default SettingsView;
