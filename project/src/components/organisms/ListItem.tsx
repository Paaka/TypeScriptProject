import React, { FC } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../../store/index';
import styled from 'styled-components';

import { updateListTitle, addNote, deleteList } from '../../actions/index';
import { IList } from '../../models/List';

import MainInput from '../atoms/MainInput';
import allColors from '../../constants/allColors';
import ItemForm from '../molecules/ItemForm';
import SingleNote from '../molecules/SingleNote';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';

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
    background-color: ${allColors.light};
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    height: ${(props) => props.height + 'vh'};
    max-height: 85vh;
    transition: height 0.2s;
    overflow: none;
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

    const addNoteHandler = (str: string) => {
        dispatch(addNote(props.list.ID, str));
    };

    const updateListTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateListTitle(props.list.ID, e.target.value));
    };

    const deleteNoteHandler = () => {
        dispatch(deleteList(props.list.ID));
    };

    const calculateHeight = () => {
        const numOfItems = myNotes.length * 7;
        return 28 + numOfItems;
    };

    return (
        <Wrapper height={calculateHeight()}>
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
            <SecondWrapper numberOfItems={myNotes.length}>
                {myNotes.map((note) => (
                    <SingleNote note={note} />
                ))}
                <ItemForm
                    textValue="+ Add new note"
                    secondBtnText="Add note"
                    onClickFn={addNoteHandler}
                ></ItemForm>
            </SecondWrapper>
        </Wrapper>
    );
};

export default ListItem;
