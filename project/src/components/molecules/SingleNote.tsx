import React, { FC } from 'react';
import styled from 'styled-components';
import { INote } from '../../models/Note';
import StyledParagraph from '../atoms/Typography/StyledParagraph';

const Wrapper = styled.div`
    width: 80%;
    padding: 10px 5px;
    background-color: white;
    text-align: center;
    border-radius: 8px;
    margin-top: 3px;
`;

interface ISingleNote {
    note: INote;
}

const SingleNote: FC<ISingleNote> = (props) => {
    return (
        <Wrapper>
            <StyledParagraph>{props.note.content}</StyledParagraph>
        </Wrapper>
    );
};

export default SingleNote;
