export interface INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;

    constructor(id: string, listID: string, text: string, priority: number) {
        this.ID = id;
        this.ListID = listID;
        this.content = text;
        this.priority = priority;
    }
}
export default Note;
