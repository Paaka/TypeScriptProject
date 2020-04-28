import React, { FC, useState } from 'react';
import styled from 'styled-components';
import StyledH1 from '../atoms/Typography/StyledH1';
import allColors from '../../constants/allColors';
import DivImage from '../atoms/DivImage';

interface IBoardsList {
    children: string;
}

interface Iactive {
    isActive: boolean;
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    position: absolute;
    top: 2px;
    left: 11vw;
`;

const StyledText = styled(StyledH1)`
    margin-left: -15px;
`;

const StyledDivImage = styled(DivImage)<Iactive>`
    box-sizing: content-box;
    border-radius: 50%;
    padding: 5px;
    background-color: white;
    transform: rotate(${(props) => (props.isActive ? '180deg' : '0')});
    transition: transform 0.2s;
`;

const BoardsList: FC<IBoardsList> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper onClick={toggleIsOpen}>
            <StyledText color={allColors.darkGrey}>{props.children}</StyledText>
            <StyledDivImage
                isActive={isOpen}
                bgSize={17}
                imagePath={require('../../assets/SVGs/down-arrow.svg')}
            />
        </Wrapper>
    );
};

export default BoardsList;
