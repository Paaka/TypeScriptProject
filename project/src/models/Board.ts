export interface IBoard {
    title: string;
    id: string;
}

class Board implements IBoard {
    id: string;
    title: string;
    constructor(ID: string, title: string) {
        this.id = ID;
        this.title = title;
    }
}

export default Board;
