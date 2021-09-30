export declare class UserClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    getUsers(role: string): Promise<any>;
    getUser(id: any): Promise<any>;
    addUser(category: any): Promise<any>;
    deleteCategory(id: any): Promise<any>;
}
