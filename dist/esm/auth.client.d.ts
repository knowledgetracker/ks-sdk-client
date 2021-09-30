export declare class AuthClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    login(user: any): Promise<any>;
    adminLogin(user: any): Promise<any>;
    register(user: any): Promise<any>;
}
