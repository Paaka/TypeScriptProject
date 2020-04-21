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

const Wrapper = styled.div`
    width: 100vw;
    max-width: 1004%;
    height: 90vh;
    background-color: ${allColors.primary};
    float: left;
    display: grid;
    grid-template-columns: repeat(100, 25vw);
    grid-template-rows: 90vh;
`;

const BoardView = () => {
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const lists = useSelector((state) => state.lists);

    return (
        <MainTemplate>
            <Wrapper>
                {lists.map((list) => {
                    return <ListItem key={list.ID} list={list} />;
                })}
                <FormForList />
            </Wrapper>
        </MainTemplate>
    );
};

export default BoardView;
