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

interface selectProtected {
    card: HTMLDivElement;
}

const SingleNote: FC<ISingleNote> = (props) => {
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        console.log(e);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const evTarget = e.target as HTMLDivElement;
        e.dataTransfer.setData('card_id', evTarget.id);
        setTimeout(() => {
            evTarget.style.display = 'none';
        }, 0);
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const el = document.getElementById(props.note.ID);
        if (el !== null) {
            el.style.display = 'block';
        }
    };

    return (
        <Wrapper
            draggable="true"
            id={props.note.ID}
            onDragStart={dragHandler}
            onDragOver={dragOverHandler}
            onDragEnd={dropHandler}
        >
            <StyledParagraph>{props.note.content}</StyledParagraph>
        </Wrapper>
    );
};

export default SingleNote;
