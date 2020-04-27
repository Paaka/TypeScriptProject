import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';

import BoardView from './views/BoardView';

import DashboardView from './views/DashboardView';

import SettingsView from './views/SettingsView';
import RaportsView from './views/RaportsView';
import ScheduleView from './views/ScheduleView';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <BoardView></BoardView>
                    </Route>
                    <Route path="/Dashboards">
                        <DashboardView></DashboardView>
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
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
