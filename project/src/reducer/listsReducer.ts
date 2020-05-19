import * as types from '../actions/types';
import List, { IList } from '../models/List';
import Note, { INote } from '../models/Note';
import axios from 'axios';

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
            axios
                .post('http://localhost:8080/notes', {
                    listTitle: action.payload.content,
                    dashboardID: action.payload.dashboardID,
                })
                .then((res) => console.log(res));
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
        case types.DELETE_LIST: {
            return {
                ...state,
                lists: state.lists.filter(
                    (list) => list.ID !== action.payload.listID
                ),
            };
        }
        case types.ADD_NOTE: {
            console.log(action);

            return {
                ...state,
                notes: [
                    ...state.notes,
                    new Note(action.payload.listID, action.payload.content),
                ],
            };
        }
        case types.DRAG_NOTE: {
            console.log(action.payload);
            return {
                ...state,
                notes: state.notes.map((note) => {
                    if (note.ID === action.payload.noteID) {
                        console.log('work');
                        return {
                            ...note,
                            ListID: action.payload.listID,
                        };
                    } else {
                        return note;
                    }
                }),
            };
        }
        default:
            return state;
    }
};

export default listsReducer;
