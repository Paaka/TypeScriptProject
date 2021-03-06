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

export const addNote = (
    id: string,
    listID: string,
    content: string,
    priority: number,
    description: string,
    deadline: string
) => {
    return {
        type: types.ADD_NOTE,
        payload: {
            id,
            listID,
            content,
            priority,
            description,
            deadline,
        },
    };
};

export const changeNoteImportance = (noteID: string, priority: number) => {
    return {
        type: types.CHANGE_NOTE_IMPORTANCE,
        payload: {
            noteID,
            priority,
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

export const deleteBoard = (boardID: string) => {
    return {
        type: types.DELETE_BOARD,
        payload: {
            boardID,
        },
    };
};

export const deleteNote = (noteID: string) => {
    return {
        type: types.DELETE_NOTE,
        payload: {
            noteID,
        },
    };
};

export const updateBoardTitle = (boardID: string, newTitle: string) => {
    return {
        type: types.UPDATE_BOARD_TITLE,
        payload: {
            boardID,
            newTitle,
        },
    };
};

export const updateNoteDescription = (noteID: string, description: string) => {
    return {
        type: types.UPDATE_NOTE_DESCRIPTION,
        payload: {
            noteID,
            description,
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

export const updateNoteTitle = (noteID: string, newTitle: string) => {
    return {
        type: types.UPDATE_NOTE_TITLE,
        payload: {
            noteID,
            newTitle,
        },
    };
};

export const addBoard = (board: any) => {
    return {
        type: types.ADD_BOARD,
        payload: {
            secondary: board.secondaryColor,
            primary: board.primaryColor,
            title: board.title,
            id: board._id,
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

export const setNoteDeadline = (noteID: string, newDeadline: string) => {
    return {
        type: types.SET_NOTE_DEADLINE,
        payload: {
            noteID,
            newDeadline,
        },
    };
};
