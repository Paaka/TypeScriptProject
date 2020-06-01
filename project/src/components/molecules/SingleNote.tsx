import React, { FC } from 'react';
import styled from 'styled-components';
import { INote } from '../../models/Note';
import StyledParagraph from '../atoms/Typography/StyledParagraph';
import { useHistory, useLocation } from 'react-router-dom';
import ImportanceLabel from '../atoms/ImportanceLabel';

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
    const History = useHistory();
    const location = useLocation();
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
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
            onClick={() =>
                History.push(`${location.pathname}/${props.note.ID}`)
            }
            draggable="true"
            id={props.note.ID}
            onDragStart={dragHandler}
            onDragOver={dragOverHandler}
            onDragEnd={dropHandler}
        >
            <ImportanceLabel priority={props.note.priority} />
            <StyledParagraph>{props.note.content}</StyledParagraph>
        </Wrapper>
    );
};

export default SingleNote;
