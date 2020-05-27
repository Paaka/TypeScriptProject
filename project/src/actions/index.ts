import * as types from './types';

export const addList = (content: string, dashboardID: string, id: string) => {
    return {
        type: types.ADD_LIST,
        payload: {
            id,
            content,
            dashboardID,
        },
    };
};

export const updateListTitle = (listID: string, content: string) => {
    return {
        type: types.UPDATE_LIST_TITLE,
        payload: {
            listID,
            content,
        },
    };
};

export const addNote = (id: string, listID: string, content: string) => {
    return {
        type: types.ADD_NOTE,
        payload: {
            id,
            listID,
            content,
        },
    };
};

export const deleteList = (listID: string) => {
    return {
        type: types.DELETE_LIST,
        payload: {
            listID,
        },
    };
};

export const dragNote = (noteID: string, listID: string) => {
    return {
        type: types.DRAG_NOTE,
        payload: {
            noteID,
            listID,
        },
    };
};

export const addBoard = (board: Object) => {
    return {
        type: types.ADD_BOARD,
        payload: {
            board,
        },
    };
};

export const logInUser = (user: object, token: string) => {
    return {
        type: types.LOGIN_USER,
        payload: {
            user,
            token,
        },
    };
};

export const logOutUser = () => {
    return {
        type: types.LOGOUT_USER,
    };
};
