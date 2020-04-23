import * as types from './types';

export const addList = (content: string, dashboardID: string) => {
    return {
        type: types.ADD_LIST,
        payload: {
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

export const addNote = (listID: string, content: string) => {
    return {
        type: types.ADD_NOTE,
        payload: {
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
