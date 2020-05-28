import React, { FC, useEffect } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';

import { addBoard } from '../actions/index';
import { RootState } from '../store/index';

import MainTemplate from '../templates/MainTemplate';
import DashboardItem from '../components/molecules/SingleItems/DashboardItem';
import DashboardFormModal from '../components/organisms/BoardFormModal';

interface IDashboardView {}

const Wrapper = styled.div`
    margin-top: 2vh;
    margin-left: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 22vw);
    position: absolute;
`;

const DashboardView: FC<IDashboardView> = () => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const Dashboards = useSelector((state) => state.dashboards);
    const Token = useSelector((state) => state.token);

    useEffect(() => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.get('http://localhost:9000/Dashboards', { headers })
            .then((res) => {
                const arr: Array<Object> = res.data;
                if (Dashboards.length !== arr.length) {
                    arr.forEach((board) => dispatch(addBoard(board)));
                }
            })
            .catch((err) => console.log(err));
    }, [Token]);

    return (
        <MainTemplate>
            <Wrapper>
                {Dashboards.map((dashboard) => (
                    <DashboardItem token={Token} id={dashboard.id}>
                        {dashboard.title}
                    </DashboardItem>
                ))}
                <DashboardFormModal></DashboardFormModal>
            </Wrapper>
        </MainTemplate>
    );
};

export default DashboardView;
