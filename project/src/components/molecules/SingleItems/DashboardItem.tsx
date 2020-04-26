import React, { FC } from 'react';
import styled from 'styled-components';

interface IDashboardItem {
    children: string;
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: royalblue;
    height: 150px;
    padding: 10px 5px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
`;

const StyledHeading = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 20px;
    padding: 0px;
    margin: 0px;
    text-transform: uppercase;
    font-weight: 300;
`;

const DashboardItem: FC<IDashboardItem> = (props) => {
    return (
        <Wrapper>
            <StyledHeading>{props.children}</StyledHeading>
        </Wrapper>
    );
};

export default DashboardItem;
