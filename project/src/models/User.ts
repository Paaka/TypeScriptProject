export interface IUser {
    name: String;
    email: String;
}

class User implements IUser {
    name: String;
    email: String;
    constructor(userObj: any) {
        this.name = userObj.name;
        this.email = userObj.email;
    }
}

export default User;
