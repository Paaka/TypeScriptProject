import styled from 'styled-components';
import allColors from '../../constants/allColors';

interface IUserPicture {
    logoPath: string;
}

const UserPicture = styled.div<IUserPicture>`
    height: 40px;
    width: 40px;
    background-image: url(${({ logoPath }) => logoPath});
    background-position-x: center;
    background-position-y: center;
    background-size: 20px;
    background-repeat: no-repeat;
    background-color: ${allColors.grey};
    padding: 5px;
    border-radius: 50%;
`;

export default UserPicture;
