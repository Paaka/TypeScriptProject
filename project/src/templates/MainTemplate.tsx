import React, { FC } from 'react';
import Sidebar from '../components/organisms/Sidebar';

interface IMainTemplate {
    children?: JSX.Element;
}

const MainTemplate: FC<IMainTemplate> = (props) => {
    return (
        <>
            <Sidebar></Sidebar>
            {props.children}
        </>
    );
};

export default MainTemplate;
