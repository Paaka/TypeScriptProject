import React, { FC } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';
import allColors from '../constants/allColors';

interface IMainTemplate {
    children?: JSX.Element;
}

const Wrapper = styled.div`
    position: relative;
    overflow: none;
    width: 100%;
`;

const MainTemplate: FC<IMainTemplate> = (props) => {
    return (
        <Wrapper>
            <Sidebar></Sidebar>
            {props.children}
        </Wrapper>
    );
};

export default MainTemplate;
