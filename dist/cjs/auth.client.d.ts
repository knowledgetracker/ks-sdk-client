export declare class AuthClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    login(user: any): Promise<any>;
    getUsers(user: any): Promise<any>;
    getUser(userId: any): Promise<any>;
}
