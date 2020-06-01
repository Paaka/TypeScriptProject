import React, { FC, useEffect } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../../store/index';
import styled from 'styled-components';

import {
    updateListTitle,
    addNote,
    deleteList,
    dragNote,
} from '../../actions/index';
import { IList } from '../../models/List';

import MainInput from '../atoms/MainInput';
import allColors from '../../constants/allColors';
import ItemForm from '../molecules/ItemForm';
import SingleNote from '../molecules/SingleNote';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';
import Axios from 'axios';

interface IListItem {
    list: IList;
}
interface IHeightWrapper {
    height: number;
}

interface IWrapper {
    numberOfItems: number;
}

const Wrapper = styled.div<IHeightWrapper>`
    display: flex;
    flex-direction: column;
    background-color: ${allColors.listColor};
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    height: ${(props) => props.height + 'vh'};
    max-height: 80vh;
    transition: height 0.2s;
    overflow: none;
    margin-top: 7vh;
`;

const SecondWrapper = styled.div<IWrapper>`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: ${(props) => (props.numberOfItems >= 10 ? 'scroll' : 'none')};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

const ListItem: FC<IListItem> = (props) => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const allNotes = useSelector((state) => state.notes);
    const myNotes = allNotes.filter((note) => note.ListID === props.list.ID);
    const Token = useSelector((state) => state.token);

    const headers = { Authorization: `Bearer ${Token}` };

    const addNoteHandler = (str: string) => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.post(
            'http://localhost:9000/notes',
            {
                content: str,
                listID: props.list.ID,
            },
            { headers }
        )
            .then((res) =>
                dispatch(
                    addNote(
                        res.data._id,
                        res.data.listID,
                        res.data.content,
                        res.data.priority
                    )
                )
            )
            .catch((e) => console.log(e));
    };

    const updateListTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateListTitle(props.list.ID, e.target.value));
        Axios.patch(
            'http://localhost:9000/lists',
            {
                listID: props.list.ID,
                newTitle: e.target.value,
            },
            { headers }
        )
            .then((res) => console.log())
            .catch((err) => console.log(err));
    };

    const deleteNoteHandler = () => {
        Axios.delete(`http://localhost:9000/lists/${props.list.ID}`, {
            headers,
        })
            .then((res) => dispatch(deleteList(props.list.ID)))
            .catch((err) => console.log(err));
    };

    const calculateHeight = () => {
        const numOfItems = myNotes.length * 7;
        return 28 + numOfItems;
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        Axios.patch(
            'http://localhost:9000/notes',
            {
                cardID: card_id,
                listID: props.list.ID,
            },
            { headers }
        )
            .then((res) => dispatch(dragNote(card_id, props.list.ID)))
            .catch((err) => console.log(err));

        const el = document.getElementById(card_id);
        if (el !== null) {
            el.style.display = 'block';
        }
    };
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <Wrapper
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
            height={calculateHeight()}
        >
            <InputWrapper>
                <MainInput
                    width={70}
                    value={props.list.listTitle}
                    onChange={updateListTitleHandler}
                ></MainInput>
                <ButtonIcon
                    height={20}
                    width={20}
                    onClickFn={deleteNoteHandler}
                    iconPath={require('../../assets/SVGs/cancel.svg')}
                ></ButtonIcon>
            </InputWrapper>
            <SecondWrapper onDrop={dropHandler} numberOfItems={myNotes.length}>
                {myNotes.map((note) => (
                    <SingleNote note={note} />
                ))}
                <ItemForm
                    textValue="Add note"
                    secondBtnText="Add note"
                    onClickFn={addNoteHandler}
                ></ItemForm>
            </SecondWrapper>
        </Wrapper>
    );
};

export default ListItem;
