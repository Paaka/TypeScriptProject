import * as types from '../actions/types';
import List, { IList } from '../models/List';
import Note, { INote } from '../models/Note';

const initialState: IMainState = {
    lists: [],
    notes: [],
    dashboards: [{ id: 0 }],
};

interface IMainState {
    lists: Array<IList>;
    notes: Array<INote>;
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
        case types.UPDATE_LIST_TITLE: {
            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.ID === action.payload.listID) {
                        return {
                            ...list,
                            listTitle: action.payload.content,
                        };
                    } else {
                        return list;
                    }
                }),
            };
        }
        case types.ADD_NOTE: {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    new Note(action.payload.listID, action.payload.content),
                ],
            };
        }
        default:
            return state;
    }
};

export default listsReducer;
