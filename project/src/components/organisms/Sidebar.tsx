import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/allColors';
import StyledParagraph from '../atoms/Typography/StyledParagraph';
import SearchInput from '../molecules/SearchInput';
import UserPicture from '../atoms/UserPicture';
import allColors from '../../constants/allColors';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';

const Wrapper = styled.div`
    display: flex;
    height: 10vh;
    width: 100%;
    background-color: ${Colors.lightBlue};
    align-items: center;
    position: fixed;
    top: 0;
    justify-content: space-between;
`;

interface ISidebar {}

const DarkerWrapper = styled.div`
    display: flex;
    height: 10vh;
    width: 10vw;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.mediumBlue};
`;

const RightWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 20vw;
    justify-content: flex-end;
    margin-right: 20px;
    white-space: nowrap;
`;

const LeftWrapper = styled.div`
    display: flex;
    height: 100%;
`;

const UserWrapper = styled.div`
    display: flex;
    height: 100%;
    width: min-content;
    align-items: center;
    justify-content: center;
    border-left: 2px solid ${allColors.borderLightBlue};
`;

const TextWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 100%;
    border-left: 2px solid ${allColors.borderLightBlue};
`;

const Sidebar: FC<ISidebar> = (props) => {
    return (
        <Wrapper>
            <LeftWrapper>
                <DarkerWrapper>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <StyledParagraph fontSize={18} color="white">
                            kanban
                        </StyledParagraph>
                    </NavLink>
                </DarkerWrapper>
                <SearchInput />
            </LeftWrapper>
            <RightWrapper>
                <ItemWrapper>
                    <ButtonIcon
                        width={25}
                        height={25}
                        iconPath={require('../../assets/SVGs/notification.svg')}
                        onClickFn={() => {
                            console.log('notification');
                        }}
                    />
                </ItemWrapper>
                <UserWrapper>
                    <TextWrapper>
                        <StyledParagraph color="white">
                            M. Hartabus
                        </StyledParagraph>
                    </TextWrapper>
                    <UserPicture
                        logoPath={require('../../assets/SVGs/user.svg')}
                    />
                </UserWrapper>
            </RightWrapper>
        </Wrapper>
    );
};

export default Sidebar;
