import React, { FC, useEffect, useState } from 'react';
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
import allColors from '../constants/allColors';
import Spinner from '../components/atoms/Spinner/Spinner';

interface IDashboardView {}

const BgWrapper = styled.div`
    width: 100%;
    height: 90vh;
    background-color: ${allColors.lightGray};
`;

const Wrapper = styled.div`
    margin-top: 2vh;
    margin-left: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 22vw);
    position: absolute;
`;

const DashboardView: FC<IDashboardView> = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
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
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [Token]);

    return (
        <MainTemplate>
            <BgWrapper>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Wrapper>
                        {Dashboards.map((dashboard) => (
                            <DashboardItem
                                primary={dashboard.primary}
                                secondary={dashboard.secondary}
                                token={Token}
                                id={dashboard.id}
                            >
                                {dashboard.title}
                            </DashboardItem>
                        ))}
                        <DashboardFormModal></DashboardFormModal>
                    </Wrapper>
                )}
            </BgWrapper>
        </MainTemplate>
    );
};

export default DashboardView;
