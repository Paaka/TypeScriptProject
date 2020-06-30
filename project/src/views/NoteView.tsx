import React, { useState } from 'react';

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
import {
    setNoteDeadline,
    updateNoteTitle,
    deleteNote,
    changeNoteImportance,
    updateNoteDescription,
} from '../actions';
import Axios from 'axios';
import ImportanceLabel from '../components/atoms/ImportanceLabel';
import StyledParagraph from '../components/atoms/Typography/StyledParagraph';
import DivImage from '../components/atoms/DivImage';
import Description from '../components/molecules/Description';
import { backendURL } from '../constants/url';

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
    border-radius: 5px;
`;

const PositionWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const StyledH2 = styled.h2`
    margin: 10px 0;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 22px;
    margin-left: 10px;
`;

const FlexWrapper = styled.div`
    display: flex;
    width: 60%;
    margin: 10px auto;
    justify-content: space-between;
`;

const FlexW = styled.div`
    display: flex;
    align-items: center;
`;

const NotesView = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [label, setLabel] = useState('');

    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const Notes = useSelector((state) => state.notes);
    const Lists = useSelector((state) => state.lists);
    const Token = useSelector((state) => state.token);
    const headers = { Authorization: `Bearer ${Token}` };

    const locationArray = location.pathname.split('/');
    const noteID = locationArray[3];

    const Note = Notes.find((note) => note.ID === noteID);
    const list = Lists.find((list) => list.ID === Note?.ListID);

    const [dateOfExecution, setDateOfExecution] = useState(
        Note?.deadline || ''
    );

    const noteTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNoteTitle(noteID, e.target.value));
        Axios.patch(
            `${backendURL}/notes`,
            { cardID: noteID, title: e.target.value },
            { headers }
        )
            .then((res) => console.log())
            .catch((err) => console.log());
    };

    const updateDateHandler = () => {
        Axios.patch(
            `${backendURL}/notes`,
            { cardID: noteID, deadline: dateOfExecution },
            { headers }
        )
            .then((res) =>
                console.log(setNoteDeadline(noteID, dateOfExecution))
            )
            .catch((res) => console.log(res));
    };

    const deleteNoteHandler = () => {
        Axios.delete(`${backendURL}/notes/${noteID}`, { headers })
            .then((res) => dispatch(deleteNote(noteID)))
            .catch((err) => console.log(err));
        returnToLists();
    };

    const changePriority = (priority: number, text: string) => {
        setLabel(text);
        dispatch(changeNoteImportance(noteID, priority));
        Axios.patch(
            `${backendURL}/notes`,
            { cardID: noteID, priority },
            { headers }
        )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const saveDescription = (value: string) => {
        dispatch(updateNoteDescription(noteID, value));
        Axios.patch(
            `${backendURL}/notes`,
            { cardID: noteID, description: value },
            { headers }
        )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
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
                    <FlexW>
                        <DivImage
                            height={25}
                            width={25}
                            imagePath={require('../assets/SVGs/title.svg')}
                        />
                        <MainInput
                            value={Note?.content || ''}
                            onChange={noteTitleHandler}
                        ></MainInput>
                    </FlexW>
                    <StyledParagraph fontSize={18} color={allColors.silverGray}>
                        In list <u>{list?.listTitle}</u>
                    </StyledParagraph>
                    <FlexW>
                        <DivImage
                            height={25}
                            width={25}
                            imagePath={require('../assets/SVGs/move.svg')}
                        />

                        <StyledH2>Change priority :</StyledH2>
                    </FlexW>
                    <StyledParagraph>
                        {label === '' ? ` ` : `You choose ${label}`}
                    </StyledParagraph>
                    <FlexWrapper>
                        <ImportanceLabel
                            onClickFn={changePriority}
                            priority={1}
                        />
                        <ImportanceLabel
                            onClickFn={changePriority}
                            priority={2}
                        />
                        <ImportanceLabel
                            onClickFn={changePriority}
                            priority={3}
                        />
                    </FlexWrapper>
                    <FlexW>
                        <DivImage
                            height={25}
                            width={25}
                            imagePath={require('../assets/SVGs/product.svg')}
                        />
                        <StyledH2>Description :</StyledH2>
                    </FlexW>
                    <Description
                        initialValue={Note?.description || ''}
                        onClickFn={saveDescription}
                    />
                    <FlexW>
                        <DivImage
                            height={25}
                            width={25}
                            imagePath={require('../assets/SVGs/product.svg')}
                        />
                        <StyledH2>Set due date :</StyledH2>
                    </FlexW>
                    <input
                        value={dateOfExecution}
                        type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setDateOfExecution(e.target.value)
                        }
                    ></input>
                    <button onClick={updateDateHandler}>Save</button>
                    <button onClick={deleteNoteHandler}>Usuń notatke</button>
                </Wrapper>
            </BackgroundWrapper>
        </MainTemplate>
    );
};

export default NotesView;
