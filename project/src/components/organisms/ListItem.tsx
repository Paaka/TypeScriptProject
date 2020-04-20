import React, { FC } from 'react';
import styled from 'styled-components';

import { IList } from '../../models/List';
import MainInput from '../atoms/MainInput';
import allColors from '../../constants/allColors';

interface IListItem {
    list: IList;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24vw;
    max-height: 80vh;
    padding: 10px;
    margin: 20px;
    border-radius: 20px;
    background-color: ${allColors.light};
`;

const ListItem: FC<IListItem> = (props) => {
    return (
        <Wrapper>
            <MainInput value={props.list.listTitle}></MainInput>
        </Wrapper>
    );
};

export default ListItem;
