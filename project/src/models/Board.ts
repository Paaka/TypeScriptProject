export interface IBoard {
    title: string;
    id: string;
    primary: string;
    secondary: string;
}

class Board implements IBoard {
    id: string;
    title: string;
    primary: string;
    secondary: string;
    constructor(ID: string, title: string, primary: string, secondary: string) {
        this.id = ID;
        this.title = title;
        this.primary = primary;
        this.secondary = secondary;
    }
}

export default Board;
