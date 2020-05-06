import styled, { css } from 'styled-components';
import allColors from '../../../constants/allColors';

interface IButton {
    secondary?: boolean;
}

const Button = styled.div<IButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
        to right bottom,
        ${allColors.purpule},
        ${allColors.pink}
    );
    color: ${allColors.light};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    padding: 3px 10px;
    border-radius: 5px;
    width: 80%;
    flex: none;
    height: 2rem;

    ${({ secondary }) =>
        secondary &&
        css`
            background-image: linear-gradient(
                to right bottom,
                ${allColors.mediumBlue},
                ${allColors.borderLightBlue}
            );
        `}
`;

export default Button;
