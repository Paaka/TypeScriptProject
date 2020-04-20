import * as types from '../actions/types';
import List, { IList } from '../models/List';

const initialState: IMainState = {
    lists: [],
    dashboards: [{ id: 0 }],
};

interface IMainState {
    lists: Array<IList>;
    dashboards: Array<any>;
}

const listsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.ADD_LIST: {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    new List(
                        action.payload.content,
                        action.payload.dashboardID
                    ),
                ],
            };
        }
        default:
            return state;
    }
};

export default listsReducer;
