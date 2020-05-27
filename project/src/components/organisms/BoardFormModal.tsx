import React, { useState } from 'react';
import {
    useDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { addBoard } from '../../actions/index';

import { RootState } from '../../store/index';
import styled from 'styled-components';
import allColors from '../../constants/allColors';
import DivImage from '../atoms/DivImage';
import Button from '../atoms/Buttons/Button';
import MainInput from '../atoms/MainInput';
import Axios from 'axios';

interface IActive {
    isActive: boolean;
}

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    height: 50px;
    width: 50px;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.mediumBlue},
        ${allColors.lightBlue}
    );
    border-radius: 50px;
    transition: 0.2s all;
`;

const Modal = styled.div<IActive>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vw;
    background-color: white;
    transition: all 0.25s;
    transform: translateX(${(props) => (props.isActive ? '0%' : '100%')});
    border-left: 2px solid ${allColors.darkGrey};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButton = styled(Button)`
    background-image: linear-gradient(
        to right bottom,
        ${allColors.mediumBlue},
        ${allColors.lightBlue}
    );
    margin-top: 10px;
    cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    width: 80%;
`;

const BoardFormModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputedValue, setInputedValue] = useState('');
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const Token = useSelector((state) => state.token);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const setInputedText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputedValue(e.target.value);
    };

    const addBoardHandler = () => {
        const headers = { Authorization: `Bearer ${Token}` };
        Axios.post(
            'http://localhost:9000/BoardsAPI',
            { title: inputedValue },
            {
                headers: headers,
            }
        )
            .then((res) => dispatch(addBoard(res.data)))
            .catch((e) => console.log(e));
        setInputedValue('');
    };

    return (
        <>
            <AddButton onClick={toggleIsOpen}>
                <DivImage
                    imagePath={require('../../assets/SVGs/more.svg')}
                ></DivImage>
            </AddButton>
            <Modal isActive={isOpen}>
                <CloseButtonWrapper>
                    <DivImage
                        imagePath={require('../../assets/SVGs/cancel.svg')}
                        onClick={toggleIsOpen}
                    />
                </CloseButtonWrapper>
                <FormWrapper>
                    <MainInput
                        value={inputedValue}
                        onChange={setInputedText}
                        isForm
                    ></MainInput>
                    <StyledButton onClick={addBoardHandler}>
                        Add Board
                    </StyledButton>
                </FormWrapper>
            </Modal>
        </>
    );
};

export default BoardFormModal;
