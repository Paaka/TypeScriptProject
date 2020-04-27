import styled from 'styled-components';
import Sizes from '../../../constants/Sizes';

interface IStyledParagraph {
    color?: string;
    fontSize?: number;
}

const StyledParagraph = styled.div<IStyledParagraph>`
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : Sizes.S)};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: ${({ color }) => (color ? color : 'black')};
`;

export default StyledParagraph;
