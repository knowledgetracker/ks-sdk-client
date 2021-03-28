export declare class CategoryClient {
    headers: any;
    API_URL: string;
    COURSE_SERVER_URL: string;
    constructor(config?: any);
    getCategories(): Promise<any>;
    getCategory(id: any): Promise<any>;
    addCategory(category: any): Promise<any>;
    deleteCategory(id: any): Promise<any>;
}
