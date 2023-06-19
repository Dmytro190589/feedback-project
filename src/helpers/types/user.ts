export interface IOperationsUser {
    email: string
    name?: string,
    username: string,
    password:string
}

export interface IUser {
    email: string
    image?: string,
    name?: string,
    username: string,
}

export interface IUserState {
    auth: any;
    token: null|string;
    user: IUser;
    isLoading: boolean,
    error: null | string,
}