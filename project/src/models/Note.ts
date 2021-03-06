import { isNull } from 'util';

export interface INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;
    deadline: string | null;
}

class Note implements INote {
    ID: string;
    ListID: string;
    content: string;
    priority: number;
    description: string;
    deadline: string | null;

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
