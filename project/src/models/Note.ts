export interface INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;
    deadline: string;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;
    deadline: string;

    constructor(
        id: string,
        listID: string,
        text: string,
        priority: number,
        des: string,
        deadline: string
    ) {
        this.ID = id;
        this.ListID = listID;
        this.content = text;
        this.priority = priority;
        this.description = des;
        this.deadline = deadline;
    }
}
export default Note;
