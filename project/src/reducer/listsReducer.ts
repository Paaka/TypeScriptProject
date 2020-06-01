import * as types from '../actions/types';
import List, { IList } from '../models/List';
import Note, { INote } from '../models/Note';
import { IToken } from '../models/Token';
import Board, { IBoard } from '../models/Board';
import User, { IUser } from '../models/User';
import { stringify } from 'querystring';

const initialState: IMainState = {
    lists: [],
    notes: [],
    dashboards: [],
    user: {},
    token: null,
};

interface IMainState {
    lists: Array<IList>;
    notes: Array<INote>;
    dashboards: Array<any>;
    user: IUser | Object;
    token: IToken | null;
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
                        action.payload.dashboardID,
                        action.payload.id
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
            return {
                ...state,
                notes: [
                    ...state.notes,
                    new Note(
                        action.payload.id,
                        action.payload.listID,
                        action.payload.content,
                        action.payload.priority
                    ),
                ],
            };
        }
        case types.DELETE_BOARD: {
            return {
                ...state,
                dashboards: state.dashboards.filter(
                    (board) => board.id !== action.payload.boardID
                ),
            };
        }
        case types.DRAG_NOTE: {
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
        case types.LOGIN_USER: {
            return {
                ...state,
                token: action.payload.token,
                user: new User(action.payload.user),
            };
        }
        case types.ADD_BOARD: {
            return {
                ...state,
                dashboards: [
                    ...state.dashboards,
                    new Board(action.payload.id, action.payload.title),
                ],
            };
        }
        case types.LOGOUT_USER: {
            return {
                ...state,
                user: {},
                token: null,
            };
        }
        case types.UPDATE_BOARD_TITLE: {
            return {
                ...state,
                dashboards: state.dashboards.map((board) => {
                    if (board.id === action.payload.boardID) {
                        return {
                            ...board,
                            title: action.payload.newTitle,
                        };
                    } else {
                        return board;
                    }
                }),
            };
        }
        case types.UPDATE_NOTE_TITLE: {
            const newcontent: string = action.payload.newTitle;
            return {
                ...state,
                notes: state.notes.map((note) => {
                    if (note.ID === action.payload.noteID) {
                        return {
                            ...note,
                            content: newcontent,
                        };
                    } else {
                        return note;
                    }
                }),
            };
        }
        case types.DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(
                    (note) => note.ID !== action.payload.noteID
                ),
            };
        }
        case types.CHANGE_NOTE_IMPORTANCE: {
            return {
                ...state,
                notes: state.notes.map((note) => {
                    const priority: number = action.payload.priority;
                    if (note.ID === action.payload.noteID) {
                        return {
                            ...note,
                            priority,
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
