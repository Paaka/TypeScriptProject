const initialState = {
    playerPosition: [10, 0],
};

interface HelloWorld {
    lists: ILists;
}

interface ILists {
    id: string;
    content: string;
}

const listsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;
