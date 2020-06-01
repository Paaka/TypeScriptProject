export interface IList {
    ID: string;
    listTitle: string | any;
    dashboardID: string;
}

class List implements IList {
    ID: string;
    listTitle: string;
    dashboardID: string;

    constructor(title: string, dashID: string, id: string) {
        this.ID = id;
        this.listTitle = title;
        this.dashboardID = dashID;
    }
}
export default List;
