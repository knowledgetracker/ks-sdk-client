export declare class AuthClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    static login(user: any): Promise<any>;
}
