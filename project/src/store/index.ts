import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import listsReducer from '../reducer/listsReducer';

const rootReducer = combineReducers({
    lists: listsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
