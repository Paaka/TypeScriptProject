export interface IList {
    ID: string;
    listTitle: string;
    dashboardID: string;
}

class List implements IList {
    ID: string;
    listTitle: string;
    dashboardID: string;

    constructor(title: string, dashID: string) {
        this.ID = Date.now().toString();
        this.listTitle = title;
        this.dashboardID = dashID;
    }
}
export default List;
