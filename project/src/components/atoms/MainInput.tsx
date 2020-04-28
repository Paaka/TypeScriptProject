import styled, { css } from 'styled-components';
import Sizes from '../../constants/Sizes';

interface IMainInput {
    isForm?: boolean;
    width?: number;
}

const MainInput = styled.input<IMainInput>`
    font-size: ${Sizes.L};
    width: ${({ width }) => (width ? width + '%' : '90%')};
    font-weight: 700;
    background-color: transparent;
    border: none;
    outline: none;
    transition: all 0.2s;
    padding: 5px 10px;

    &:focus {
        background-color: white;
        border: 2px solid royalblue;
        border-radius: 10px;
    }

    ${({ isForm }) =>
        isForm &&
        css`
            border-bottom: 2px solid royalblue;
            border-radius: 0px;

            &:focus {
                background-color: transparent;
                border: none;
                border-bottom: 2px solid royalblue;
                border-radius: 2px;
            }
        `}
`;

export default MainInput;
