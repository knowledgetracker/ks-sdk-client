import { AxiosWrapper } from "../api";
import { Observable } from "rxjs";
export declare class CoachClient {
    axiosWrapper: AxiosWrapper;
    constructor(environment?: string, orgId?: string, accessToken?: string);
    getCoaches: () => Observable<any>;
    getCoach: (id: any) => Observable<any>;
    addCoach: (coach: any) => Observable<unknown>;
    deleteCoach(id: any): Promise<Observable<unknown>>;
}
