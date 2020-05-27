import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IDashboardItem {
    children: string;
    id: string;
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
        <Link to={`/boards/${props.id}`}>
            <Wrapper>
                <StyledHeading>{props.children}</StyledHeading>
            </Wrapper>
        </Link>
    );
};

export default DashboardItem;
