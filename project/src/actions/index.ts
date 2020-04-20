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
