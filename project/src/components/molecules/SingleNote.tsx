import React, { FC } from 'react';
import styled from 'styled-components';
import { INote } from '../../models/Note';
import StyledParagraph from '../atoms/Typography/StyledParagraph';
import { useHistory, useLocation } from 'react-router-dom';
import allColors from '../../constants/allColors';
import ImportanceLabel from '../atoms/ImportanceLabel';
import UserPicture from '../atoms/UserPicture';

interface ISingleNote {
    note: INote;
}

const Wrapper = styled.div`
    width: 80%;
    padding: 10px 5px;
    background-color: white;
    border-radius: 8px;
    margin-top: 3px;
`;

const ParagraphWrapper = styled.div`
    margin: 15px 0;
`;

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
            <ParagraphWrapper>
                <StyledParagraph color={allColors.silverGray}>
                    {props.note.content}
                </StyledParagraph>
                <UserPicture
                    logoPath={require('../../assets/SVGs/user.svg')}
                ></UserPicture>
            </ParagraphWrapper>
        </Wrapper>
    );
};

export default SingleNote;
