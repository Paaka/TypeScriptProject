import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';

const Wrapper = styled.div`
    display: flex;
    height: 10vh;
    min-width: 100vw;
    background-color: ${Colors.secodary};
`;

interface ISidebar {}

const Sidebar: FC<ISidebar> = (props) => {
    return (
        <Wrapper>
            <ul>
                <li>Hi</li>
            </ul>
        </Wrapper>
    );
};

export default Sidebar;
