import React, { useEffect } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../store/index';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import FormForList from '../components/molecules/FormForLists';
import allColors from '../constants/allColors';
import ListItem from '../components/organisms/ListItem';
import BoardsList from '../components/molecules/BoardsList';
import BoardFormModal from '../components/organisms/BoardFormModal';
import Axios from 'axios';
import { addList } from '../actions';

interface IWrapper {
    width: number;
}

const ColumnWrapper = styled.div<IWrapper>`
    width: ${(props) => props.width + 'vw'};
    height: 90vh;
    background-color: ${allColors.lightGray};
    display: grid;
    grid-template-columns: repeat(100, 25vw);
    grid-template-rows: 90vh;
`;

const BoardView = () => {
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const lists = useSelector((state) => state.lists);
    const Token = useSelector((state) => state.token);

    const dashID = useLocation().pathname.replace('/boards/', '');
    const dispatch = useDispatch();

    useEffect(() => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.get(`http://localhost:9000/lists`, { headers })
            .then((res) => {
                const arr: Array<any> = res.data;
                if (lists.length !== arr.length) {
                    arr.forEach((list) =>
                        dispatch(
                            addList(list.listTitle, list.listOwner, list._id)
                        )
                    );
                }
            })
            .catch((err) => console.log(err));
    }, [Token, dispatch]);

    const calculateWidth = () => {
        const numOfItems = lists.length;
        if (numOfItems < 3) {
            return 90;
        } else {
            return numOfItems * 25 + 25;
        }
    };

    return (
        <MainTemplate>
            <ColumnWrapper width={calculateWidth()}>
                <BoardsList>Board1</BoardsList>
                {console.log(lists)}
                {lists.map((list) => {
                    if (list.dashboardID === dashID) {
                        return <ListItem key={list.ID} list={list} />;
                    }
                })}
                <FormForList owner={dashID} token={Token} />
                <BoardFormModal />
            </ColumnWrapper>
        </MainTemplate>
    );
};

export default BoardView;
