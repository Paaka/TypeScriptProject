export interface INote {
    ID: string;
    ListID: string;
    content: string;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;

    constructor(listID: string, text: string) {
        this.ID = Date.now().toString();
        this.ListID = listID;
        this.content = text;
    }
}
export default Note;
