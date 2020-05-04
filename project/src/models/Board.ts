export interface IBoard {
    title: string;
}

class Board implements IBoard {
    id: string;
    title: string;
    constructor(title: string) {
        this.id = Date.now().toString();
        this.title = title;
    }
}

export default Board;
