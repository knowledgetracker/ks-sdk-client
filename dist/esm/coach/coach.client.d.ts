import { Observable } from "rxjs";
export declare class CoachClient {
    headers: any;
    API_URL: string;
    url: string;
    constructor(config?: any);
    getCoaches: () => Observable<any>;
    getCoach: (id: any) => Observable<any>;
    addCoach: (coach: any) => Observable<Observable<unknown>>;
    deleteCoach(id: any): Promise<any>;
}
