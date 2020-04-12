import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';

import BoardView from './views/BoardView';
import MainView from './views/MainView';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/xxxx">
                        <MainView></MainView>
                    </Route>
                    <Route path="/">
                        <BoardView></BoardView>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
