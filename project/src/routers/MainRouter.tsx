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

const MainRouter = () => {
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const Token = useSelector((state) => state.token);
    console.log(isNull(Token));

    return (
        <Router>
            <Switch>
                {isNull(Token) ? (
                    <Redirect from="/" exact to="/Login"></Redirect>
                ) : (
                    <Redirect from="/" exact to="/Dashboards"></Redirect>
                )}
                {!isNull(Token) ? (
                    <Route path="/Dashboards">
                        <DashboardView></DashboardView>
                    </Route>
                ) : (
                    <Redirect from="/Dashboards" exact to="/Login"></Redirect>
                )}
                {!isNull(Token) ? (
                    <Route path="/Boards/:id">
                        <BoardView></BoardView>
                    </Route>
                ) : (
                    <Redirect from="/Boards" to="/Login"></Redirect>
                )}
                {!isNull(Token) ? (
                    <Route path="/Settings">
                        <SettingsView></SettingsView>
                    </Route>
                ) : (
                    <Redirect from="/Settings" exact to="/Login"></Redirect>
                )}
                {!isNull(Token) ? (
                    <Route path="/Raports">
                        <RaportsView></RaportsView>
                    </Route>
                ) : (
                    <Redirect from="/Raports" exact to="/Login"></Redirect>
                )}
                {!isNull(Token) ? (
                    <Route path="/Schedule">
                        <ScheduleView></ScheduleView>
                    </Route>
                ) : (
                    <Redirect from="/Schedule" exact to="/Login"></Redirect>
                )}

                {isNull(Token) ? (
                    <Route path="/Login">
                        <LoginView></LoginView>
                    </Route>
                ) : (
                    <Redirect from="/Login" exact to="/Dashboards"></Redirect>
                )}
                {isNull(Token) ? (
                    <Route path="/SignIn">
                        <SignInView></SignInView>
                    </Route>
                ) : (
                    <Redirect from="/SignIn" exact to="/Dashboards"></Redirect>
                )}
            </Switch>
        </Router>
    );
};

export default MainRouter;
