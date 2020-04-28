import React, { FC } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';
import allColors from '../constants/allColors';
import VerticalSidebar from '../components/organisms/Sidebars/VerticalSidebar';

interface IMainTemplate {
    children?: JSX.Element;
}

const Wrapper = styled.div`
    position: relative;
    overflow: none;
    overflow-y: none;
    width: 100%;
`;

const ContentWrapper = styled.div`
    margin-top: 10vh;
    margin-left: 10vw;
`;

const MainTemplate: FC<IMainTemplate> = (props) => {
    return (
        <Wrapper>
            <Sidebar></Sidebar>
            <VerticalSidebar />
            <ContentWrapper>{props.children}</ContentWrapper>
        </Wrapper>
    );
};

export default MainTemplate;
