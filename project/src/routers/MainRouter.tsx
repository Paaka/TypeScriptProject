import React from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom';

import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import { RootState } from '../store/index';

import BoardView from '../views/BoardView';
import DashboardView from '../views/DashboardView';
import SettingsView from '../views/SettingsView';
import RaportsView from '../views/RaportsView';
import ScheduleView from '../views/ScheduleView';
import LoginView from '../views/LoginView';
import SignInView from '../views/SignInView';
import { isNull } from 'util';
import NoteView from '../views/NoteView';

const MainRouter = () => {
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const Token = useSelector((state) => state.token);
    const isTokenActive = isNull(Token);

    const unauthorizedComponents = () => (
        <>
            <Route path="/Login">
                <LoginView></LoginView>
            </Route>
            <Route path="/SignIn">
                <SignInView></SignInView>
            </Route>
            <Redirect from="/" exact to="/Login"></Redirect>
            <Redirect from="/Dashboards" exact to="/Login"></Redirect>
            <Redirect from="/Boards" to="/Login"></Redirect>
            <Redirect from="/Settings" exact to="/Login"></Redirect>
            <Redirect from="/Raports" exact to="/Login"></Redirect>
            <Redirect from="/Schedule" exact to="/Login"></Redirect>
        </>
    );
    const AuthorizedCompontents = () => (
        <>
            <Redirect from="/" exact to="/Dashboards"></Redirect>
            <Redirect from="/Login" exact to="/Dashboards"></Redirect>
            <Redirect from="/SignIn" exact to="/Dashboards"></Redirect>

            <Route path="/Dashboards">
                <DashboardView></DashboardView>
            </Route>
            <Route path="/Boards/:id" exact>
                <BoardView></BoardView>
            </Route>
            <Route path="/Boards/:id/:noteId">
                <NoteView></NoteView>
            </Route>
            <Route path="/Settings">
                <SettingsView></SettingsView>
            </Route>
            <Route path="/Raports">
                <RaportsView></RaportsView>
            </Route>
            <Route path="/Schedule">
                <ScheduleView></ScheduleView>
            </Route>
        </>
    );
    return (
        <Router>
            <Switch>
                {isTokenActive
                    ? unauthorizedComponents()
                    : AuthorizedCompontents()}
            </Switch>
        </Router>
    );
};

export default MainRouter;
