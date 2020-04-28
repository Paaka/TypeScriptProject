import styled from 'styled-components';

interface IDivImage {
    imagePath: string;
    width?: number;
    height?: number;
    bgSize?: number;
    mLeft?: number;
}

const DivImage = styled.div<IDivImage>`
    background-image: url(${(props) => props.imagePath});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: ${(props) =>
        props.bgSize ? props.bgSize + 'px' : 'cover'};

    width: ${(props) => (props.width ? props.width + 'px' : '20px')};
    height: ${(props) => (props.height ? props.height + 'px' : '20px')};
    margin-left: ${(props) => (props.mLeft ? props.mLeft + 'px' : '0px')};
`;

export default DivImage;
