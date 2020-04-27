import React, { FC } from 'react';
import MainTemplate from '../templates/MainTemplate';

interface ISettingsView {}

const SettingsView: FC<ISettingsView> = () => {
    return (
        <MainTemplate>
            <h1>SettingsView</h1>
        </MainTemplate>
    );
};

export default SettingsView;
