import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IToken } from '../../../models/Token';
import { deleteBoard } from '../../../actions/index';
import styled from 'styled-components';
import allColors from '../../../constants/allColors';
import ButtonIcon from '../../atoms/Buttons/ButtonIcon';
import Axios from 'axios';

interface IDashboardItem {
    children: string;
    id: string;
    token: IToken;
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: linear-gradient(
        to left top,
        ${allColors.lightBlue},
        ${allColors.mediumBlue}
    );
    height: 150px;
    padding: 10px 5px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
`;

const StyledHeading = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    width: 18vw;
    font-size: 20px;
    padding: 0px;
    margin: 0px;
    text-transform: uppercase;
    font-weight: 300;
    height: 140px;
    min-width: 100%;
    text-align: bottom;
`;

const DashboardItem: FC<IDashboardItem> = (props) => {
    const dispatch = useDispatch();
    const deleteDashboardHandler = () => {
        const headers = { Authorization: `Bearer ${props.token}` };
        Axios.delete(`http://localhost:9000/Dashboards/${props.id}`, {
            headers,
        })
            .then((result) => dispatch(deleteBoard(result.data._id)))
            .catch((err) => console.log(err));
    };

    return (
        <Wrapper>
            <Link style={{ textDecoration: 'none' }} to={`/boards/${props.id}`}>
                <StyledHeading>{props.children}</StyledHeading>
            </Link>
            <ButtonIcon
                height={20}
                width={20}
                onClickFn={deleteDashboardHandler}
                iconPath={require('../../../assets/SVGs/close-white.svg')}
            />
        </Wrapper>
    );
};

export default DashboardItem;
