import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';

import BoardView from './views/BoardView';
import MainView from './views/MainView';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/xxxx">
                        <MainView></MainView>
                    </Route>
                    <Route exact path="/">
                        <BoardView></BoardView>
                    </Route>
                    <Route path="/Dashboards">
                        <DashboardView></DashboardView>
                    </Route>
                    <Route path="/LogIn">
                        <LoginView></LoginView>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
