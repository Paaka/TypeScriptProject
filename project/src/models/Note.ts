export interface INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;

    constructor(
        id: string,
        listID: string,
        text: string,
        priority: number,
        des: string
    ) {
        this.ID = id;
        this.ListID = listID;
        this.content = text;
        this.priority = priority;
        this.description = des;
    }
}
export default Note;
