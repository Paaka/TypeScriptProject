import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { updateListTitle } from '../../actions/index';
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

    const addNoteHandler = (str: string) => {
        console.log(str);
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
            <ItemForm
                textValue="+ Add new note"
                secondBtnText="Add note"
                onClickFn={addNoteHandler}
            ></ItemForm>
        </Wrapper>
    );
};

export default ListItem;
