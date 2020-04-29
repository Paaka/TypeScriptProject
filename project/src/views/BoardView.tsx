import React from 'react';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../store/index';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import FormForList from '../components/molecules/FormForLists';
import allColors from '../constants/allColors';
import ListItem from '../components/organisms/ListItem';
import BoardsList from '../components/molecules/BoardsList';
import BoardFormModal from '../components/organisms/BoardFormModal';

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
                {lists.map((list) => {
                    return <ListItem key={list.ID} list={list} />;
                })}
                <FormForList />
                <BoardFormModal />
            </ColumnWrapper>
        </MainTemplate>
    );
};

export default BoardView;
