export declare class CoachClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    getCoaches(orgId: string): Promise<any>;
    getCoach(id: any): Promise<any>;
    addCoach(orgId: string, coach: any): Promise<any>;
    deleteCoach(id: any): Promise<any>;
}
