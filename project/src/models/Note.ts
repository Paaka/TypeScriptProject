export interface INote {
    ID: string;
    ListID: string;
    content: string;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;

    constructor(id: string, listID: string, text: string) {
        this.ID = id;
        this.ListID = listID;
        this.content = text;
    }
}
export default Note;
