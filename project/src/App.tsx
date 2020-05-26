import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import MainRouter from './routers/MainRouter';

function App() {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    );
}

export default App;
