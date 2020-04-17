import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import FormForList from '../components/molecules/FormForLists';
import allColors from '../constants/allColors';

const Wrapper = styled.div`
    min-width: 100%;
    height: 90vh;
    display: grid;
    background-color: ${allColors.primary};
    grid-template-rows: 100%;
    grid-template-columns: repeat(10, 24vw);
`;

const BoardView = () => {
    return (
        <MainTemplate>
            <Wrapper>
                <FormForList />
            </Wrapper>
        </MainTemplate>
    );
};

export default BoardView;
