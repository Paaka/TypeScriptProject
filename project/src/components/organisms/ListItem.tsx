import React, { FC } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../../store/index';
import styled from 'styled-components';

import { updateListTitle, addNote } from '../../actions/index';
import { IList } from '../../models/List';

import MainInput from '../atoms/MainInput';
import allColors from '../../constants/allColors';
import ItemForm from '../molecules/ItemForm';

interface IListItem {
    list: IList;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24vw;
    height: 10rem;
    max-height: 80vh;
    padding: 10px;
    margin: 20px;
    border-radius: 20px;
    background-color: ${allColors.light};
`;

const ListItem: FC<IListItem> = (props) => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const allNotes = useSelector((state) => state.notes);

    const myNotes = allNotes.filter((note) => note.ListID === props.list.ID);
    const addNoteHandler = (str: string) => {
        dispatch(addNote(props.list.ID, str));
    };

    const updateListTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateListTitle(props.list.ID, e.target.value));
    };
    return (
        <Wrapper>
            <MainInput
                value={props.list.listTitle}
                onChange={updateListTitleHandler}
            ></MainInput>
            {myNotes.map((note) => (
                <p>{note.content}</p>
            ))}
            <ItemForm
                textValue="+ Add new note"
                secondBtnText="Add note"
                onClickFn={addNoteHandler}
            ></ItemForm>
        </Wrapper>
    );
};

export default ListItem;
