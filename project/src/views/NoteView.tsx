import React from 'react';

import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import { RootState } from '../store/index';

import MainTemplate from '../templates/MainTemplate';
import styled from 'styled-components';
import allColors from '../constants/allColors';
import { useHistory, useLocation } from 'react-router-dom';
import ButtonIcon from '../components/atoms/Buttons/ButtonIcon';
import MainInput from '../components/atoms/MainInput';
import { updateNoteTitle } from '../actions';

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 90vh;
    background-color: ${allColors.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 80vh;
    background-color: white;
    position: relative;
    padding: 10px;
`;

const PositionWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const NotesView = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const Notes = useSelector((state) => state.notes);

    const locationArray = location.pathname.split('/');
    const noteID = locationArray[3];

    const Note = Notes.find((note) => note.ID === noteID);

    const noteTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNoteTitle(noteID, e.target.value));
    };

    const returnToLists = () => history.goBack();

    return (
        <MainTemplate>
            <BackgroundWrapper>
                <Wrapper>
                    <PositionWrapper>
                        <ButtonIcon
                            height={20}
                            width={20}
                            onClickFn={returnToLists}
                            iconPath={require('../assets/SVGs/cancel.svg')}
                        />
                    </PositionWrapper>
                    <MainInput
                        value={Note?.content || ''}
                        onChange={noteTitleHandler}
                    ></MainInput>
                </Wrapper>
            </BackgroundWrapper>
        </MainTemplate>
    );
};

export default NotesView;
