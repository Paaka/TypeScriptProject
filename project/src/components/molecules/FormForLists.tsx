import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addList } from '../../actions/index';

import Button from '../atoms/Buttons/Button';
import allColors from '../../constants/allColors';
import Sizes from '../../constants/Sizes';
import MainInput from '../atoms/MainInput';
import ButtonIcon from '../atoms/Buttons/ButtonIcon';
import DivImage from '../atoms/DivImage';
import Axios from 'axios';

const Column = styled.div`
    height: 90vh;
    width: 24vw;
`;

interface IStyledButton {
    isFormOpen: boolean;
    width?: number;
    height?: number;
    bgSize?: number;
    mLeft?: number;
}

const StyledButton = styled.div<IStyledButton>`
    cursor: pointer;
    width: 200px;
    height: ${(props) => (props.isFormOpen ? '6rem' : '2rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        props.isFormOpen ? allColors.listColor : allColors.listColor};
    margin: 7vh auto 0;
    padding: 10px 0px;
    border-radius: 5px;
    z-index: 0;
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.listColor : 'rgba(0, 0, 0, 0.025)'};
    }

    &:active {
        background-color: ${(props) =>
            props.isFormOpen ? allColors.listColor : 'rgba(0, 0, 0, 0.02)'};
    }
`;

const StyledText = styled.p`
    color: ${allColors.darkGrey};
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${Sizes.M};
`;

const RowWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

interface IFormForList {
    owner: string;
    token: string;
}

const FormForList: FC<IFormForList> = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [inputedText, setInputedText] = useState('');

    const onClickHandler = () => {
        setIsOpen(!isOpen);
        setInputedText('');
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputedText(e.target.value);
    };

    const addListHandler = () => {
        const headers = { Authorization: `Bearer ${props.token}` };
        Axios.post(
            'http://localhost:9000/lists',
            { listTitle: inputedText, listOwner: props.owner },
            { headers }
        )
            .then((res) =>
                dispatch(
                    addList(
                        res.data.listTitle,
                        res.data.listOwner,
                        res.data._id
                    )
                )
            )
            .catch((e) => console.log(e));

        onClickHandler();
    };

    return (
        <Column>
            <StyledButton isFormOpen={isOpen}>
                {isOpen ? (
                    <Wrapper>
                        <MainInput
                            value={inputedText}
                            onChange={onTextChange}
                            isForm
                            type="text"
                        ></MainInput>
                        <RowWrapper>
                            <Button onClick={addListHandler}>Add List</Button>
                            <ButtonIcon
                                iconPath={require('../../assets/SVGs/close.svg')}
                                onClickFn={onClickHandler}
                            />
                        </RowWrapper>
                    </Wrapper>
                ) : (
                    <ImageWrapper onClick={onClickHandler}>
                        <StyledText>Add list</StyledText>
                        <DivImage
                            height={15}
                            width={15}
                            mLeft={5}
                            imagePath={require('../../assets/SVGs/add.svg')}
                        />
                    </ImageWrapper>
                )}
            </StyledButton>
        </Column>
    );
};

export default FormForList;
